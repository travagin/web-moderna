const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Pega as chaves de um objeto
console.log(Object.values(pessoa)) //Pega os valores de um objeto
console.log(Object.entries(pessoa)) //Monta um Array com todas as chaves e valores

//Percorrendo o Array
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

//Percorrendo o Array com o operador destructing
Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})

// Construir um objeto pessoa, com atribtos

const Pessoa2 = {
    nome: 'Lucas Travagin Pereira',
    genero: 'M',
    idade: 21,
    escolaridade: 'Ensino Superior'
}

// let chaves = Object.keys(Pessoa2)
// let valores = Object.values(Pessoa2)
// let toArray = Object.entries(Pessoa2)


// toArray.forEach(element => {
//     console.log(`${element[0]}: ${element[1]}`)
// })

Object.defineProperty(Pessoa2, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
console.log(Pessoa2)

//Object assign -- COncatena os astributos dos objetos em objeto destino
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2)


Object.freeze(obj)
obj.c = 1234
console.log(obj)