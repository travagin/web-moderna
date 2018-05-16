{ { { { var sera = 'Será?' } } } }

console.log(sera);

//A variável var ficará visível até fora do bloco, desde que não
//seja uma função.

function teste() {
    var local = 'Olá';
    console.log(local);
}

console.log(local);