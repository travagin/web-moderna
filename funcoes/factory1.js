//Factory Simples
//Factory é uma função que no final ela sempre retorna um objeto.

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

