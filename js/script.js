const campoPesquisa = document.getElementById("barra-pesquisa");
const resultados = document.getElementById("resultados");

const secoes = document.querySelectorAll(".secao");

// Cada corredor tem 16 seções (1-16, 17-32, 33-48)
function corredorDaSecao(secao) {
    return Math.ceil(secao / 16);
}

campoPesquisa.addEventListener("input", pesquisar);

function pesquisar() {

    //Tirar os acentos para normalizar a pesquisa
    function normalizar(texto){
        return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    }

    const textoPesquisado = normalizar(campoPesquisa.value);

    resultados.innerHTML = "";

    // Remove o destaque de todas as seções
    secoes.forEach(secao => {
        secao.classList.remove("selecionada");
    });

    // Procura os produtos
    const encontrados = produtos.filter(produto => normalizar(produto.nome). includes(textoPesquisado)
    );


    // Ordena os resultados
    encontrados.sort((a, b) => {

        const posicaoA = normalizar(a.nome).indexOf(textoPesquisado);
        const posicaoB = normalizar(b.nome).indexOf(textoPesquisado);

        return posicaoA - posicaoB;

    });

    // Se a pesquisa estiver vazia
    if (textoPesquisado === "") {

    // Se nenhum produto for encontrado
    } else if (encontrados.length === 0) {

        const naoEncontrado = document.createElement("span");

        naoEncontrado.className = "produto";

        naoEncontrado.textContent =
            "Produto não encontrado, procure um atendente.";

        resultados.appendChild(naoEncontrado);

    // Se encontrou produtos
    } else {

        encontrados.forEach(produto => {

            // Procura a seção correspondente no mapa
            const secaoEncontrada = document.querySelector(
                `.secao[data-secao="${produto.seção}"]`
            );

            // Destaca a seção
            if (secaoEncontrada) {
                secaoEncontrada.classList.add("selecionada");
            }

            // Cria o resultado
            const encontrado = document.createElement("div");

            encontrado.className = "produto";

            encontrado.innerHTML = `
                <span>${produto.nome}</span>
                <span class="secaoResultado">
                    Corredor ${corredorDaSecao(produto.seção)} · Seção ${produto.seção}
                </span>
                <span class="valor-produto">
                    R$ ${produto.valor.toFixed(2)}
                </span>
            `;

            // Ao clicar no resultado, preenche a barra de pesquisa
            // com o nome do produto e refaz a busca (destacando
            // só a seção daquele produto)
            encontrado.addEventListener("click", () => {
                campoPesquisa.value = produto.nome;
                pesquisar();
            });

            resultados.appendChild(encontrado);
        });
    }
}