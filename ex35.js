// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require('prompt-sync')();

const pares = [];
const impares = [];

function imprimirVetor(tipo, vetor) {
    console.log(`\nVetor de ${tipo}:`);
    console.log(vetor.join(' '));
}

let totalLidos = 0;

while (totalLidos < 30) {
    const valor = parseInt(prompt(`Digite o valor ${totalLidos + 1}: `));

    if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
            imprimirVetor('pares', pares);
            pares.length = 0;
        }
    } else {
        impares.push(valor);
        if (impares.length === 5) {
            imprimirVetor('ímpares', impares);
            impares.length = 0;
        }
    }

    totalLidos++;
}

if (pares.length > 0) {
    imprimirVetor('pares restantes', pares);
}

if (impares.length > 0) {
    imprimirVetor('ímpares restantes', impares);
}
