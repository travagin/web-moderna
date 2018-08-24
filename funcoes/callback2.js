const notas = [5.2,3.4,8.0,9.3,8.8,4.5,10.0]

//Extraindo notas menores que 7 sem callback
let notasBaixas = []

for(let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Usando callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)