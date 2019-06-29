// Array é uma estrutura indexada
//Array tem uma estrutura heterogenea
// É uma boa prática trabalharmos com dados homogeneos no Javasript

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Forma literal
console.log(aprovados[0]) //Acessando o primeiro elemento do Array
console.log(aprovados[3]) // O indice 3 não existe no Array, retorna Undefined

aprovados[3] = 'Paulo' //Adicionando elemento no Array
aprovados.push('Lucas') //Adicionando elemento no Array
console.log(aprovados.length) //Retorna o tamanho do Array

aprovados[9] = 'Rafael'

console.log(aprovados.length)
console.log(aprovados[8] === undefined)

