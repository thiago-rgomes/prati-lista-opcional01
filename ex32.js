// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const prompt = require('prompt-sync')();

function lerMatriz12x13() {
    const M = [];
    for (let i = 0; i < 12; i++) {
        M[i] = [];
        for (let j = 0; j < 13; j++) {
            const valor = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function dividirPorMaiorModulo(M) {
    const novaMatriz = [];

    for (let i = 0; i < 12; i++) {
        const maiorModulo = Math.max(...M[i].map(Math.abs));
        novaMatriz[i] = [];

        for (let j = 0; j < 13; j++) {
            novaMatriz[i][j] = M[i][j] / maiorModulo;
        }
    }

    return novaMatriz;
}

function imprimirMatriz(titulo, M) {
    console.log(`\n${titulo}`);
    for (let i = 0; i < M.length; i++) {
        console.log(M[i].map(v => v.toFixed(2)).join('\t'));
    }
}

const M = lerMatriz12x13();
const MModificada = dividirPorMaiorModulo(M);

imprimirMatriz("Matriz original:", M);
imprimirMatriz("Matriz modificada:", MModificada);
