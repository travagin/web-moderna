// Função em Javascript é First-Class Object (Citizens)
// Higher-order function

//Criar de forma literal
// Toda função em JAvascript por padrão retorna undefined
function fun1() { }

//Armazenar em uma variável
const fun2 = function() {} //Funcao anônima.

//Armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](1,2)) //Chamando a primeira função


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}
run(function() {console.log('Executando...')})

// Um função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

