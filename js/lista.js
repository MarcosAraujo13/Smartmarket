const campoLista = document.getElementById("lista-compras");
const botaoOrganizar = document.getElementById("btn-organizar");
const saidaLista = document.getElementById("resultado-lista");

const SECOES_POR_CORREDOR = 16;
const IGNORAR = new Set(["de", "da", "do", "das", "dos", "e", "com", "para", "em", "a", "o", "um", "uma"]);

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Reduz plural: feijões -> feijao, pães -> pao, ovos -> ovo
function radical(p) {
    if (p.length > 3) {
        if (p.endsWith("oes") || p.endsWith("aes")) return p.slice(0, -3) + "ao";
        if (p.endsWith("s")) return p.slice(0, -1);
    }
    return p;
}

function palavrasProduto(texto) {
    return normalizarTexto(texto).split(/[^a-z0-9]+/).filter(Boolean).map(radical);
}

// Ignora "de", "com"... e quantidades como "1kg", "2"
function palavrasBusca(item) {
    return normalizarTexto(item)
        .split(/[^a-z0-9]+/)
        .filter(p => p.length > 1 && !IGNORAR.has(p) && !/^\d+(kg|g|l|ml|un|und)?$/.test(p))
        .map(radical);
}

function distancia(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            d[i][j] = Math.min(
                d[i - 1][j] + 1,
                d[i][j - 1] + 1,
                d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
            );
        }
    }
    return d[a.length][b.length];
}

function casa(q, w, tolerante) {
    if (q === w) return true;
    if (q.length >= 4 && w.startsWith(q)) return true; // "choco" -> "chocolate"
    return tolerante && q.length >= 5 && Math.abs(q.length - w.length) <= 1 && distancia(q, w) <= 1;
}

const indice = produtos.map(produto => ({ produto, palavras: palavrasProduto(produto.nome) }));

function buscarItem(item) {
    const q = palavrasBusca(item);
    if (!q.length) return null;

    // 1ª tentativa exata; 2ª tolerando erro de digitação
    for (const tolerante of [false, true]) {
        const achados = indice
            .filter(e => q.every(t => e.palavras.some(w => casa(t, w, tolerante))))
            .map(e => ({
                produto: e.produto,
                rank: e.palavras.findIndex(w => casa(q[0], w, tolerante))
            }))
            .sort((a, b) => a.rank - b.rank);

        if (achados.length) {
            return { produtos: achados.map(a => a.produto), aproximado: tolerante };
        }
    }
    return { produtos: [], aproximado: false };
}

function esc(texto) {
    return String(texto).replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
}

function organizarLista() {
    const itens = [...new Set(
        campoLista.value
            .split(/[\n,;]+/)
            .map(i => i.replace(/^[\s\-–•*]+/, "").trim())
            .filter(Boolean)
    )];

    const encontrados = [];
    const naoEncontrados = [];

    itens.forEach(item => {
        const r = buscarItem(item);
        if (!r || !r.produtos.length) {
            naoEncontrados.push(item);
            return;
        }

        // Agrupa os produtos por seção e escolhe a seção com mais opções
        const porSecao = new Map();
        r.produtos.forEach(p => {
            if (!porSecao.has(p.seção)) porSecao.set(p.seção, []);
            porSecao.get(p.seção).push(p);
        });

        let melhor = null;
        porSecao.forEach((lista, secao) => {
            if (!melhor || lista.length > melhor.lista.length) melhor = { secao, lista };
        });

        encontrados.push({
            item,
            secao: melhor.secao,
            produtos: melhor.lista.slice(0, 3),
            total: melhor.lista.length,
            outras: [...porSecao.keys()].filter(s => s !== melhor.secao).sort((a, b) => a - b),
            aproximado: r.aproximado
        });
    });

    // Ordem do percurso: pela numeração das seções
    encontrados.sort((a, b) => a.secao - b.secao);

    desenhar(encontrados, naoEncontrados);
    destacarMapa(encontrados);
}

function desenhar(encontrados, naoEncontrados) {
    // Limpa a pesquisa simples para não misturar os resultados
    document.getElementById("resultados").innerHTML = "";

    let html = "";
    let corredorAtual = null;

    encontrados.forEach(e => {
        const corredor = Math.ceil(e.secao / SECOES_POR_CORREDOR);
        if (corredor !== corredorAtual) {
            html += `<h2 class="titulo-corredor">Corredor ${corredor}</h2>`;
            corredorAtual = corredor;
        }

        const extras = e.total - e.produtos.length;
        html += `
            <div class="produto item-lista">
                <span>${esc(e.item)}</span>
                <span class="secaoResultado">Seção ${e.secao}</span>
                <span class="detalhe-lista">
                    ${e.produtos.map(p => esc(p.nome)).join(", ")}${extras > 0 ? ` e mais ${extras}` : ""}
                </span>
                ${e.outras.length ? `<span class="detalhe-lista">Também em: seção ${e.outras.join(", ")}</span>` : ""}
                ${e.aproximado ? `<span class="detalhe-lista">Busca aproximada, confira se é esse produto.</span>` : ""}
            </div>`;
    });

    if (naoEncontrados.length) {
        html += `
            <div class="aviso-nao-encontrado">
                <strong>Não encontramos:</strong> ${naoEncontrados.map(esc).join(", ")}.
                Procure um atendente.
            </div>`;
    }

    saidaLista.innerHTML = html;
}

function destacarMapa(encontrados) {
    document.querySelectorAll(".secao").forEach(s => s.classList.remove("selecionada"));
    encontrados.forEach(e => {
        const secao = document.querySelector(`.secao[data-secao="${e.secao}"]`);
        if (secao) secao.classList.add("selecionada");
    });
}

botaoOrganizar.addEventListener("click", organizarLista);