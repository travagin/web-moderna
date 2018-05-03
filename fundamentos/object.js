//O objeto em Javascript é uma coleção de chave e valor.
//Declaração de um objeto em Javascript.
const prod1 = {} //Um par de chaves é uma forma litereal de escrever um objeto.

prod1.nome = 'Celular'; // Nome criado dinamicamente dentro de um objeto. 
prod1.preco = '2222.90';
prod1['desconto legal'] = 0.40; //Evitar atributos com espaços.
console.log(prod1);

//Criar a notacao já dentro do objeto.
const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90',
    obj: {
        propriedade1: 1,
        propriedade2: 2
    }
}
console.log(prod2.obj);

//Json é diferente de objeto, Json é um formato textual para interoperabilidade entre sistemas (COMUNICAÇÃO).
//Exemplo de Json.

'{"nome":"Lucas Travagin Pereira", "numero": 2}'