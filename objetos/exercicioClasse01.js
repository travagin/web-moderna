class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
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

const contaDeLuz = new Lancamento('Luz', 150)
const contaDeAgua = new Lancamento('Água', 80)

const contas = new CicloFinanceiro(2, 2019)
contas.addLancamentos(contaDeLuz, contaDeAgua)

console.log(JSON.stringify(contas))