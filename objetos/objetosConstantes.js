//Oque não muda é o endereço de memória.

//Da certo
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa está recebendo um novo objeto
pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'