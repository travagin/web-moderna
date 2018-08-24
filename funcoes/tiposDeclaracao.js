console.log(soma(3,4)) //Na função declaration é possível chamar a função acima dela.

//function declaration
function soma(x,y) {
    return x + y
}

//function expression
const sub = function(x,y) {
    return x - y
}

//named function exmpression
const mult = function mult(x,y) {
    return x * y
}