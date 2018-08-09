// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Tirando o atributo do objeto pessoa.
const {nome, idade} = pessoa
console.log(nome, idade)

//Tirando o atributo do objeto pessoa e atribuindo uma variável para idade e pessoa.
const {nome: n, idade: i} = pessoa
console.log(n, i)

//Acessando os atributos logradouro e número
const {endereco: {logradouro, numero} } = pessoa