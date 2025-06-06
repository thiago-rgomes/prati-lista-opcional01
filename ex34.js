// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.


const prompt = require('prompt-sync')();

function lerMatriz50x50() {
    const M = [];
    for (let i = 0; i < 50; i++) {
        M[i] = [];
        for (let j = 0; j < 50; j++) {
            const valor = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function multiplicarLinhasPorDiagonal(M) {
    const resultado = [];

    for (let i = 0; i < 50; i++) {
        const fator = M[i][i];
        resultado[i] = [];
        for (let j = 0; j < 50; j++) {
            resultado[i][j] = M[i][j] * fator;
        }
    }

    return resultado;
}

function imprimirMatriz(M) {
    for (let i = 0; i < M.length; i++) {
        console.log(M[i].map(v => v.toFixed(2)).join('\t'));
    }
}

const M = lerMatriz50x50();
const MModificada = multiplicarLinhasPorDiagonal(M);

console.log("\nMatriz após multiplicações:");
imprimirMatriz(MModificada);
