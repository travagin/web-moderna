class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        ///console.log(lancamentos)
        lancamentos.forEach(element => this.lancamentos.push(element))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(element => {
            valorConsolidado += element.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())