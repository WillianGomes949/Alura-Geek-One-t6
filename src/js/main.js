let produtos = []
const endPointDaApi = 'http://localhost:3000/produtos'
getBuscarProdutosDaApi()
const elementoParaIserirProdutos = document.getElementById('produtos')

async function getBuscarProdutosDaApi() {
    const res = await fetch(endPointDaApi)
    produtos = await res.json()
    console.table(produtos)
    exibirProdutosNaTela(produtos)
}

function exibirProdutosNaTela(listaDeProdutos) {
    listaDeProdutos.forEach(produto => {
        elementoParaIserirProdutos.innerHTML += 
        `<div class="card" style="width: 15rem;" id="card"> 
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style=" background-color: #9303a6; width: auto; height: 200px;" id="imagem-card">
            <div class="card-body">
                <h5 class="card-title" id="produto_item">${produto.nome}</h5>
                <div class="container d-flex flex-row justify-content-between">
                    <p class="d-flex justify-content-start align-items-center fs-6">
                        <i class="btn bi bi-currency-dollar" style="color: #9303a6;" id="preco">
                        <span id="preco_do_produto">${produto.preco}</span> 
                        </i>
                    </p>
                    <i class="btn bi bi-trash3-fill" style="color: #9303a6;" id="lixeira"></i>
                </div>
            </div>
        </div>`
    });
}