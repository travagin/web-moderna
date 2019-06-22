// Object.preventExtensions - Não permite criar novos valores e atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Café Pelé', preco: 1.99, tag: 'Promoção'
})

console.log('Extensão: ', Object.isExtensible(produto)) //true

produto.nome = 'Borracha'
produto.desricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal - Não permite adicionar e nem excluir novos valores no objeto
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = Não é possível modificar o objeto
