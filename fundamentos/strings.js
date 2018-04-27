const escola = "Lucas";
console.log(escola.charAt(4)); //CharAt me retorna a letra que está no indice indicado no parâmetro.

console.log(escola.charCodeAt(3)) //Pegar o valor do caractere na tabela Unicode

console.log(escola.indexOf('L')); //Verifica se existe o caractere passado por parâmetro e retorna a posição dele.

console.log(escola.substring(1)) //Imprimir todos os caracteres a direita a partir do indice passado por parâmetro. 

console.log(escola.substring(0,3)) //Vai do indice 0 até o indice 3, sem incluir o indice3.

console.log('Lucas '.concat(escola).concat("!")); //Função de concatenar.

console.log(escola.replace('s', 'o')) //Pega a letra s e substitui pela letra o.

console.log('Ana,Maria,Pedro,Maria,Lucas'.split(',')); // Transforma String em um array, 

