const campoPesquisa = document.getElementById("barra-pesquisa");
const resultados = document.getElementById("resultados");

campoPesquisa.addEventListener("input", pesquisar);

function pesquisar() {
  const textoPesquisado = campoPesquisa.value.toLowerCase();
  resultados.innerHTML = "";

  const encontrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(textoPesquisado)
  );

  encontrados.sort((a, b) => {
    const posicaoA = a.nome.toLowerCase().indexOf(textoPesquisado);
    const posicaoB = b.nome.toLowerCase().indexOf(textoPesquisado);
    return posicaoA - posicaoB;
  });

  if (textoPesquisado === "") {

  } else if (encontrados.length === 0) {
    const naoEncontrado = document.createElement("span");
    naoEncontrado.className = "produto";
    naoEncontrado.textContent = "Produto não encontrado, procure um atendente.";
    resultados.appendChild(naoEncontrado);
  } else {
    encontrados.forEach(produto => {
      const encontrado = document.createElement("div");
      encontrado.className = "produto";
      encontrado.textContent = `${produto.nome} | Seção ${produto.seção} | R$ ${produto.valor.toFixed(2)}`;
      resultados.appendChild(encontrado);
    });
  }
}