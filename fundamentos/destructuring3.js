function hand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Imprimindo valores entre 40 e 50
const obj = {max: 50, min:40}
console.log(obj)

//Testando a função passando um objeto
console.log(rand({max: 50, min: 40}))