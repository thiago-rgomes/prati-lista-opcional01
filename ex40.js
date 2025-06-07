// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

const prompt = require('prompt-sync')();

function lerVetor(mensagem, tamanho) {
    const vetor = [];
    console.log(mensagem);
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
    }
    return vetor;
}

function ehGanhador(resultado, aposta) {
    return aposta.every(num => resultado.includes(num));
}

const resultadoOficial = lerVetor("Digite os 5 números do resultado oficial da Loto:", 5);

for (let i = 1; i <= 50; i++) {
    console.log(`\nAposta ${i}:`);
    const aposta = lerVetor("Digite os 5 números da aposta:", 5);

    if (ehGanhador(resultadoOficial, aposta)) {
        console.log("Ganhador");
    }
}
