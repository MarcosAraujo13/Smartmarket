const campoLista = document.getElementById("lista-compras");
const botaoOrganizar = document.getElementById("btn-organizar");
const botaoLimpar = document.getElementById("btn-limpar");
const saidaLista = document.getElementById("resultado-lista");

const SECOES_POR_CORREDOR = 16;
const IGNORAR = new Set(["de", "da", "do", "das", "dos", "e", "com", "para", "em", "a", "o", "um", "uma"]);

// Chaves usadas para guardar dados no navegador
const CHAVE_LISTA = "listaCompras";
const CHAVE_SECOES = "secoesLista";

// Os três marcadores: azul, vermelho e verde (as cores ficam no lista.css)
const STATUS = {
    pendente:     { rotulo: "○ Falta comprar",      classe: "status-pendente" },
    indisponivel: { rotulo: "✕ Não tem no mercado", classe: "status-indisponivel" },
    comprado:     { rotulo: "✓ Comprado",           classe: "status-comprado" }
};

// Cada entrada da lista é { item: "arroz", status: "pendente" }
let lista = carregarLista();

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
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

// ---------- Guardar e recuperar a lista (localStorage) ----------

function carregarLista() {
    try {
        const salva = JSON.parse(localStorage.getItem(CHAVE_LISTA));
        if (!Array.isArray(salva)) return [];
        return salva.filter(e => e && typeof e.item === "string" && STATUS[e.status]);
    } catch {
        return [];
    }
}

function salvarLista() {
    try {
        localStorage.setItem(CHAVE_LISTA, JSON.stringify(lista));
    } catch { /* sem armazenamento disponível: a lista só vale nesta visita */ }
}

// O mapa (index.html) lê estas seções para destacar só o que ainda falta comprar
function salvarSecoesPendentes(encontrados) {
    const secoes = [...new Set(
        encontrados.filter(e => e.entrada.status === "pendente").map(e => e.secao)
    )];
    try {
        localStorage.setItem(CHAVE_SECOES, JSON.stringify(secoes));
    } catch { /* ignora */ }
}

// ---------- Montar a lista a partir do texto digitado ----------

function lerItensDoCampo() {
    return campoLista.value
        .split(/[\n,;]+/)
        .map(i => i.replace(/^[\s\-–•*]+/, "").trim())
        .filter(Boolean);
}

function organizarLista() {
    // Quem já estava na lista mantém o marcador que tinha
    const anteriores = new Map(lista.map(e => [normalizarTexto(e.item), e.status]));
    const vistos = new Set();
    lista = [];

    lerItensDoCampo().forEach(item => {
        const chave = normalizarTexto(item);
        if (vistos.has(chave)) return;
        vistos.add(chave);
        lista.push({ item, status: anteriores.get(chave) || "pendente" });
    });

    salvarLista();
    renderizar();
}

function limparLista() {
    lista = [];
    campoLista.value = "";
    salvarLista();
    try { localStorage.removeItem(CHAVE_SECOES); } catch { /* ignora */ }
    renderizar();
}

// ---------- Desenhar ----------

function renderizar() {
    const encontrados = [];
    const semMapa = [];

    lista.forEach((entrada, posicao) => {
        const r = buscarItem(entrada.item);
        if (!r || !r.produtos.length) {
            semMapa.push({ entrada, posicao });
            return;
        }

        // Agrupa os produtos por seção e escolhe a seção com mais opções
        const porSecao = new Map();
        r.produtos.forEach(p => {
            if (!porSecao.has(p.seção)) porSecao.set(p.seção, []);
            porSecao.get(p.seção).push(p);
        });

        let melhor = null;
        porSecao.forEach((produtosDaSecao, secao) => {
            if (!melhor || produtosDaSecao.length > melhor.lista.length) {
                melhor = { secao, lista: produtosDaSecao };
            }
        });

        encontrados.push({
            entrada,
            posicao,
            secao: melhor.secao,
            produtos: melhor.lista.slice(0, 3),
            total: melhor.lista.length,
            outras: [...porSecao.keys()].filter(s => s !== melhor.secao).sort((a, b) => a - b),
            aproximado: r.aproximado
        });
    });

    // Ordem do percurso: pela numeração das seções
    encontrados.sort((a, b) => a.secao - b.secao);

    desenhar(encontrados, semMapa);
    salvarSecoesPendentes(encontrados);
}

function resumoHtml() {
    if (!lista.length) return "";
    const totais = { pendente: 0, indisponivel: 0, comprado: 0 };
    lista.forEach(e => totais[e.status]++);

    const chips = Object.entries(STATUS).map(([chave, s]) =>
        `<span class="chip ${s.classe}">${s.rotulo.slice(2)}: ${totais[chave]}</span>`
    ).join("");

    return `<div class="resumo-lista">${chips}</div>`;
}

function marcadoresHtml(entrada, posicao) {
    return `<div class="marcadores">${
        Object.entries(STATUS).map(([chave, s]) => {
            const ativo = entrada.status === chave;
            return `<button type="button"
                        class="marcador ${s.classe}${ativo ? " ativo" : ""}"
                        data-posicao="${posicao}" data-status="${chave}"
                        aria-pressed="${ativo}">${s.rotulo}</button>`;
        }).join("")
    }</div>`;
}

function itemHtml(entrada, posicao, detalhesHtml) {
    return `
        <div class="lista-item ${STATUS[entrada.status].classe}">
            <span class="nome-item">${esc(entrada.item)}</span>
            ${detalhesHtml}
            ${marcadoresHtml(entrada, posicao)}
        </div>`;
}

function desenhar(encontrados, semMapa) {
    let html = resumoHtml();
    let corredorAtual = null;

    encontrados.forEach(e => {
        const corredor = Math.ceil(e.secao / SECOES_POR_CORREDOR);
        if (corredor !== corredorAtual) {
            html += `<h2 class="lista-titulo-corredor">Corredor ${corredor}</h2>`;
            corredorAtual = corredor;
        }

        const extras = e.total - e.produtos.length;
        const detalhes = `
            <span class="secao-item">Seção ${e.secao}</span>
            <span class="detalhe-item">
                ${e.produtos.map(p => esc(p.nome)).join(", ")}${extras > 0 ? ` e mais ${extras}` : ""}
            </span>
            ${e.outras.length ? `<span class="detalhe-item">Também em: seção ${e.outras.join(", ")}</span>` : ""}
            ${e.aproximado ? `<span class="detalhe-item">Busca aproximada, confira se é esse produto.</span>` : ""}`;

        html += itemHtml(e.entrada, e.posicao, detalhes);
    });

    if (semMapa.length) {
        html += `<h2 class="lista-titulo-corredor">Não encontramos no mapa</h2>`;
        semMapa.forEach(s => {
            html += itemHtml(
                s.entrada,
                s.posicao,
                `<span class="detalhe-item">Procure um atendente.</span>`
            );
        });
    }

    saidaLista.innerHTML = html;
}

// ---------- Eventos ----------

// Um único "ouvinte" cuida dos cliques em todos os marcadores
saidaLista.addEventListener("click", evento => {
    const botao = evento.target.closest(".marcador");
    if (!botao) return;

    const entrada = lista[Number(botao.dataset.posicao)];
    if (!entrada) return;

    const novo = botao.dataset.status;
    // Clicar de novo no marcador ativo (vermelho ou verde) volta para "falta comprar"
    entrada.status = entrada.status === novo ? "pendente" : novo;

    salvarLista();
    renderizar();
});

botaoOrganizar.addEventListener("click", organizarLista);
botaoLimpar.addEventListener("click", limparLista);

// Ao abrir a página, mostra a lista que já estava salva
campoLista.value = lista.map(e => e.item).join("\n");
renderizar();
