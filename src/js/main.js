let produtos = [];

const elementoParaIserirProdutos = document.getElementById('produtos');

async function getBuscarProdutosDaApi() {
    const conexao = await fetch('https://json-server-vercel-henna-nu.vercel.app/produtos');
    produtos = await conexao.json();
    exibirProdutosNaTela(produtos);
}

getBuscarProdutosDaApi();

function exibirProdutosNaTela(listaDeProdutos) {
    listaDeProdutos.forEach(produto => {
        elementoParaIserirProdutos.innerHTML += 
        `<div class="card" style="width: 15rem;" id="card"> 
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style=" background-color: #9303a6; width: auto; height: 200px;" id="imagem-card">
            <div class="card-body">
                <h5 class="card-title" id="produto_item">${produto.nome}</h5>
                <div class="container d-flex flex-row justify-content-between">
                    <a href="#" class="botao btn btn-primary d-flex justify-content-start align-items-center fs-6 p-0 m-0">
                            <i class="btn bi bi-currency-dollar" style="color: white;" id="preco">
                            <span id="preco_do_produto">${produto.preco}</span> 
                            </i>
                    </a>                
                    <span>
                    <i class="btn bi bi-trash3-fill" style="color: #9303a6;" id="lixeira"></i>
                    </span>
                </div>
            </div>
        </div>`
    });
}

/*

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`https://json-server-vercel-henna-nu.vercel.app/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


async function buscarProduto(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.getBuscarProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => getBuscarProdutosDaApi(evento))

*/

async function adicionarProdutos(nome, preco, imagem) {
    const conexao = await fetch('https://json-server-vercel-henna-nu.vercel.app/produtos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    
    const produtos = await conexao.json();
    return produtos;
}

const formulario = document.querySelector('[data-formulario]');

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const preco = parseFloat(document.querySelector('[data-preco]').value);
    const imagem = document.querySelector('[data-imagem]').value;

    await adicionarProdutos(nome, preco, imagem);

    
    window.location.href = "./envio-concluido.html";
}

formulario.addEventListener("submit", criarProduto);