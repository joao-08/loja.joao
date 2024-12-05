const produtos = [
    { id: 1, nome: "Produto 1", preco: 29.99, imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Produto 2", preco: 39.99, imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Produto 3", preco: 49.99, imagem: "https://via.placeholder.com/150" },
    { id: 4, nome: "Produto 4", preco: 59.99, imagem: "https://via.placeholder.com/150" },
];

let carrinho = [];

const secaoProdutos = document.getElementById("produtos");
const carrinhoSidebar = document.getElementById("carrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");
const qtdItens = document.getElementById("qtdItens");
const btnAbrirCarrinho = document.getElementById("abrirCarrinho");
const btnFecharCarrinho = document.getElementById("fecharCarrinho");

// Exibe os produtos
function exibirProdutos() {
    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
        `;
        secaoProdutos.appendChild(div);
    });
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Atualiza a exibição do carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">X</button>
        `;
        listaCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    qtdItens.textContent = carrinho.length;
}

// Remove produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Mostra e esconde o carrinho
btnAbrirCarrinho.addEventListener("click", () => {
    carrinhoSidebar.classList.add("mostrar");
});

btnFecharCarrinho.addEventListener("click", () => {
    carrinhoSidebar.classList.remove("mostrar");
});

// Inicializa os produtos na página
exibirProdutos();
