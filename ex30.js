// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

const prompt = require('prompt-sync')();

function lerMatriz5x5() {
    const M = [];
    for (let i = 0; i < 5; i++) {
        M[i] = [];
        for (let j = 0; j < 5; j++) {
            const valor = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function calcularSomasLinhasColunas(M) {
    const SL = new Array(5).fill(0);
    const SC = new Array(5).fill(0);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            SL[i] += M[i][j];
            SC[j] += M[i][j];
        }
    }

    return { SL, SC };
}

function imprimirMatriz(M) {
    console.log("\nMatriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(M[i].join('\t'));
    }
}

function imprimirVetores(SL, SC) {
    console.log("\nVetor SL (soma das linhas):");
    console.log(SL.join(' '));

    console.log("\nVetor SC (soma das colunas):");
    console.log(SC.join(' '));
}

const M = lerMatriz5x5();
const { SL, SC } = calcularSomasLinhasColunas(M);

imprimirMatriz(M);
imprimirVetores(SL, SC);
