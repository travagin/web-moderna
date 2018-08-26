//Função construtora
function MontaPessoa(nome, idade, sexo) {
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo

        this.imprimirPessoa = function() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Minha idade é ${this.idade}`)
        console.log(`Sou do sexo ${this.sexo}`)
    }
}

const pessoa = new MontaPessoa('LUCAS', 20, 'Masculino')
pessoa.imprimirPessoa()
