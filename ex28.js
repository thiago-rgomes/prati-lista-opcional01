// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

const prompt = require('prompt-sync')();

function lerMatriz10x10() {
    const M = [];
    for (let i = 0; i < 10; i++) {
        M[i] = [];
        for (let j = 0; j < 10; j++) {
            const valor = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
            M[i][j] = valor;
        }
    }
    return M;
}

function somarAcimaDiagonal(M) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            soma += M[i][j];
        }
    }
    return soma;
}

function somarAbaixoDiagonal(M) {
    let soma = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            soma += M[i][j];
        }
    }
    return soma;
}

const M = lerMatriz10x10();

const somaAcima = somarAcimaDiagonal(M);
const somaAbaixo = somarAbaixoDiagonal(M);

console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
