//Armazenando uma função em uma variável.

//Função anonima
const imprimirSoma = function(a,b) {
    console.log(a + b);
}

imprimirSoma(2,3);

// Armazenando uma função Arrow
//Redução da função
const soma = (a,b) => {
    return a + b
}

console.log(soma(2 +3));

//Retorno implicito

const subtracao = (a,b) => a-b

console.log(subtracao(2,3));

const imprimir = a => console.log(a)
imprimir('Legaaaal')