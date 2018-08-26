//Utilizando o padrão Classe.
class Pessoa {
    constructor(nome, idade, sexo) {
        //Meu atributo fica público por causa do this.
        this.nome = nome,
            this.idade = idade,
            this.sexo = sexo
    }

    imprimirPessoa() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Minha idade é ${this.idade}`)
        console.log(`Sou do sexo ${this.sexo}`)
    }
}

const pessoa1 = new Pessoa('Lucas', 22, 'Masculino')
pessoa1.imprimirPessoa()

//Utilizando o padrão Factory
const criarPessoa = (nome, idade, sexo) => {
    return {
        imprimirPessoa2() {
            console.log(`Meu nome é ${nome}`)
            console.log(`Minha idade é ${idade}`)
            console.log(`Sou do sexo ${sexo}`)
        }
    }
}
const pessoa2 = criarPessoa('João', 20, 'Masculino')
pessoa2.imprimirPessoa2()
