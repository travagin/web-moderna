// Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em js
const obj2 = new Object
console.log(obj2)

// Funções contrutoras.
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Lucas', 50.000, 1)
const f2 = criarFuncionario('Vanessa', 20.000, 3)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um objeto.
const fromJSON = JSON.parse('{"info": "Sou o Lucas"}')
console.log(fromJSON.info)