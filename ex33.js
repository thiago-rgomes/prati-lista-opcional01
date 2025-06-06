// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const prompt = require('prompt-sync')();

function lerMatriz3x3() {
    const M = [];
    for (let i = 0; i < 3; i++) {
        M[i] = [];
        for (let j = 0; j < 3; j++) {
            const valor = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function calcularMediaDiagonalSecundaria(M) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += M[i][2 - i];
    }
    return soma / 3;
}

function multiplicarDiagonalPrincipal(M, media) {
    const resultado = [];

    for (let i = 0; i < 3; i++) {
        resultado[i] = [];
        for (let j = 0; j < 3; j++) {
            if (i === j) {
                resultado[i][j] = M[i][j] * media;
            } else {
                resultado[i][j] = M[i][j];
            }
        }
    }

    return resultado;
}

function imprimirMatriz(titulo, M) {
    console.log(`\n${titulo}`);
    for (let i = 0; i < 3; i++) {
        console.log(M[i].map(v => v.toFixed(2)).join('\t'));
    }
}

const M = lerMatriz3x3();
const mediaSecundaria = calcularMediaDiagonalSecundaria(M);
const MModificada = multiplicarDiagonalPrincipal(M, mediaSecundaria);

imprimirMatriz("Matriz original:", M);
imprimirMatriz("Matriz modificada:", MModificada);
