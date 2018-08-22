const notas = [1,2,3,4,5,6,7,8]

///Percorre pelos indices.

for(i in notas ) {
    console.log(i, notas[0])
}
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Lucas',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)