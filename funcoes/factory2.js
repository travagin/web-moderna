
//UMa funcao criarProduto que recebera o nome e preco e retorna um novo produto.console

const criarProduto = (nome, preco) => {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Cenoura Abravanel', 1.89))