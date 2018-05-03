//Array é um vetor, uma estrutura unidirecional.O Array é uma forma de agrupar um conjunto de valores, de maneira linear.
//Declaração de um array. - Você acessa um elemento de um Array através do seu indice.

const valores = [7.7,8.9,9.1,1.2]
console.log(valores[0], valores[3]);

//Acessando um indice que não existe
console.log(valores[4]); //Retorna Undefined

valores[4] = 10;
console.log(valores[4]);
console.log(valores);
console.log(valores.length); //Verifica quantos elementos tem no array.

valores.push({id: 3},false,null,'teste'); //O Array em Javascript ele é Heterogeneo, ou seja, ele aceita tipos diferente em uma mesma estrutura (misturar dados).
console.log(valores);

console.log(valores.pop()); //Ele retira o ultimo item do array. 

delete valores[0]; //Apaga o elemento do arrray, conforme o indice que vc passar.

console.log(typeof valores); //O retorna o tipo da variável, o array no Javascript ele é do tipo object.

