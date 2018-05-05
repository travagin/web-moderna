//Conceito de Referência
const a = {name:"teste"};
const b = a;

b.name="Lucas";
console.log(a);


//Com let
let c = {name:'Lucas'};
let d = c;

d.name = 'RONALDO'
console.log(c);

//null e Udefined.
let valor;
console.log(valor) //undefined. 

valor = null;
console.log(valor); // ausência de valor
//console.log(valor.toString()); //Não pode acessar algo de uma coisa que está null.

const produto = {};
console.log(produto.preco); //Não está definido o preço do produto (Undefined)

produto.preco = 3.50;
console.log(produto);
produto.preco = undefined;
console.log(!!produto.preco); //Evite aribuir undefined.

produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto)