console.log('01)', '1' == 1) // Verdadeiro
console.log('02)', '1' === 1) // Falso
console.log('03)', '3' != 3) //Falso
console.log('04)', '3' !== 3) //Verdadeiro
console.log('05)',  3 < 2) //Falso 
console.log('06)',  3 > 2) //Verdadeiro 
console.log('07)',  3 <= 2) //Falso 
console.log('08)',  3 >= 2) //Verdadeiro

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //Falso
console.log('10)', d1 == d2) //Falso
console.log('11)', d1.getTime() === d2.getTime()) //Verdadeiro

console.log('12)', undefined == null)
console.log('13', undefined === null)