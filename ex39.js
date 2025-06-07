// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const prompt = require('prompt-sync')();

function lerVetor100() {
    const A = [];
    for (let i = 0; i < 100; i++) {
        A[i] = parseFloat(prompt(`Digite o valor A[${i + 1}]: `));
    }
    return A;
}

function compactarVetor(A) {
    const B = A.filter(valor => valor > 0);
    return B;
}

function imprimirVetor(nome, vetor) {
    console.log(`\nVetor ${nome}:`);
    console.log(vetor.join(', '));
}

const A = lerVetor100();
const B = compactarVetor(A);

imprimirVetor('A (original)', A);
imprimirVetor('B (compactado - sem nulos/negativos)', B);
