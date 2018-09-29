const sequencia = {
    _valor: 1, //por convenção é dita como privada
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)


