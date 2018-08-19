function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(7.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade...' + valor)
    }
}

seForVerdadeEuFalo() //Não passando nenhum parâmetro retorna false.
seForVerdadeEuFalo(null) //Passando null retorna falso.
seForVerdadeEuFalo(undefined) //Passando undefined retorna false.
seForVerdadeEuFalo(NaN) //Passando NaN retorna false.
seForVerdadeEuFalo('') //Passando uma string vazia retorna false
seForVerdadeEuFalo(0) //Passando 0 retorna false.
seForVerdadeEuFalo(-1) //Passando -1 retorna true.
seForVerdadeEuFalo(' ') //Passando uma string com espaço retorna true.
seForVerdadeEuFalo('?') //Passando um sinal de interrogação retorna true.
seForVerdadeEuFalo([]) //Passando um Array vazio retorna true.
seForVerdadeEuFalo([1,2]) //Passando um Array com elementos retorna true.
seForVerdadeEuFalo({}) //Passando um object vazio retorna true.

