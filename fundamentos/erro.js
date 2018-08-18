function tratarErroELancar(e) {
    //throw new Error('Ocorreu um erro de processamento!')
    //throw 10
    //throw true
    //throw 'mensagem'
    
    throw {
        nome: erro.name,
        msg : erro.message,
        date: new Date
    }

}

function imprimeNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }

imprimeNomeGritado(obj);