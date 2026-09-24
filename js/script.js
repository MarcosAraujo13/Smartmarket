const campoPesquisa = document.getElementById("barra-pesquisa");
const resultados = document.getElementById("resultados");

const secoes = document.querySelectorAll(".secao");

campoPesquisa.addEventListener("input", pesquisar);

function pesquisar() {

    const textoPesquisado = campoPesquisa.value.toLowerCase();

    resultados.innerHTML = "";

    // Remove o destaque de todas as seções
    secoes.forEach(secao => {
        secao.classList.remove("selecionada");
    });

    // Procura os produtos
    const encontrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisado)
    );

    // Ordena os resultados
    encontrados.sort((a, b) => {

        const posicaoA = a.nome.toLowerCase().indexOf(textoPesquisado);
        const posicaoB = b.nome.toLowerCase().indexOf(textoPesquisado);

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
                    Seção ${produto.seção}
                </span>
                <span class="valor-produto">
                    R$ ${produto.valor.toFixed(2)}
                </span>
            `;

            resultados.appendChild(encontrado);
        });
    }
}