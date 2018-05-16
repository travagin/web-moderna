//Funcao 
//Trecho de código que vc pode reusar através do seu nome.

//Função sem retorno.
function imprimeSoma(a,b) {
    console.log(a + b);
}

imprimeSoma(2,3); //5
imprimeSoma(2); //NaN
imprimeSoma(2,10,4,5,6,7); //12
imprimeSoma(); //

//fUNCAO COM RETORNO
function soma(a,b = 0) {
    return a + b;
}
console.log(soma(2,7)); //9
console.log(soma(2)); //2
console.log(soma()); //NaN