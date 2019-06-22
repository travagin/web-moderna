
console.log(typeof String)
console.log(typeof  Array)
console.log(typeof Object)

//Inverter String
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Lucas Travagin'.reverse())

//Pegar o primeiro elemento do array
Array.prototype.first = function() {
    return this[0]
}

//-- --> Não fazer isso
// String.prototype.toString() = function() {
//     return 'Lascou tudo'
// }

console.log([1,2,3,4,5].first())