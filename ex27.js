// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require('prompt-sync')();

function lerMatriz(linhas, colunas) {
    const M = [];
    for (let i = 0; i < linhas; i++) {
        M[i] = [];
        for (let j = 0; j < colunas; j++) {
            const valor = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function multiplicarMatrizPorValor(M, A) {
    const V = [];
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            V.push(M[i][j] * A);
        }
    }
    return V;
}

const M = lerMatriz(6, 6);
const A = parseFloat(prompt("Digite o valor de A: "));
const V = multiplicarMatrizPorValor(M, A);

console.log("\nVetor V (matriz multiplicada por A):");
console.log(V.join(', '));
