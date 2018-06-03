//Notação Ponto
console.log(Math.ceil(6,1)) // O objeto Math acessa a função ceil

const obj1 = {}

obj1.nome = 'Lucas Travagin'
//obj1['nome'] = 'Bola 2'

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Executando')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);


obj3.exec()