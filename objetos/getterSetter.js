const sequencia = {
    _valor: 1, //por convenção é dita como privada
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        console.log(this._valor)
        if (valor > this._valor) {
            this._valor = valor
        } else{
            console.log('Valor inválido')
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2
console.log(sequencia.valor, sequencia.valor)


