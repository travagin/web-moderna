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

