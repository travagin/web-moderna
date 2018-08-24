let dobro = function(a) {
    return 2 * a
}

//Função arrow com parenteses
dobro = (a) => {
    return 2 * a
}
//Função arrow sem parenteses e sem chaves
dobro = a => 2 * a //return está implicito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

//Arrow Function sem parametro
ola = () => 'Olá'

ola = _ => 'Olá'
console.log(ola())