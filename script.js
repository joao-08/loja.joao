// Array de produtos
const produtos = [
    { id: 1, nome: "Produto 1", preco: 29.99, imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Produto 2", preco: 39.99, imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Produto 3", preco: 49.99, imagem: "https://via.placeholder.com/150" },
    { id: 4, nome: "Produto 4", preco: 59.99, imagem: "https://via.placeholder.com/150" },
    { id: 5, nome: "Produto 5", preco: 69.99, imagem: "https://via.placeholder.com/150" },
    { id: 6, nome: "Produto 6", preco: 79.99, imagem: "https://via.placeholder.com/150" },
    { id: 7, nome: "Produto 7", preco: 89.99, imagem: "https://via.placeholder.com/150" },
    { id: 8, nome: "Produto 8", preco: 99.99, imagem: "https://via.placeholder.com/150" },
];

// Carrinho
let carrinho = [];

// Seleciona os elementos do DOM
const secaoProdutos = document.getElementById('produtos');
const btnCarrinho = document.getElementById('btnCarrinho');
const modalCarrinho = document.getElementById('carrinho');
const itensCarrinho = document.getElementById('itensCarrinho');
const totalCarrinho = document.getElementById('totalCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');

// Função para exibir os produtos
function exibirProdutos() {
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
        `;
        secaoProdutos.appendChild(divProduto);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    itensCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">X</button>
        `;
        itensCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    btnCarrinho.textContent = `Carrinho (${carrinho.length})`;
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Mostrar ou esconder o carrinho
btnCarrinho.addEventListener('click', () => {
    modalCarrinho.style.display = 'block';
});

fecharCarrinho.addEventListener('click', () => {
    modalCarrinho.style.display = 'none';
});

// Exibe os produtos na página
exibirProdutos();
.