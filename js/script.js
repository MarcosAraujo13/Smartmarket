console.log("js funcionando");

const campoPesquisa = document.getElementById("pesquisa");
const resultados = document.getElementById("resultados");

campoPesquisa.addEventListener("input", pesquisar);

function pesquisar() {
  const textoPesquisado = campoPesquisa.value.toLowerCase();
  resultados.innerHTML = "";
  produtos.forEach((produto) => {
    if (produto.nome.toLowerCase().includes(textoPesquisado)) {
      resultados.innerHTML += `
            <div class="produto">
                <span>${produto.nome}</span>
                <span>| Seção ${produto.seção}</span>
                <span> | R$ ${produto.valor.toFixed(2)}</span>
            </div>
        `;
    }
  });

}

