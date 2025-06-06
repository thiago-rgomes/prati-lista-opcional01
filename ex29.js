// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.


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

function calcularSomas(M) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const valor = M[i][j];
            somaTotal += valor;

            if (i === 3) somaLinha4 += valor;
            if (j === 1) somaColuna2 += valor;
            if (i === j) somaDiagonalPrincipal += valor;
        }
    }

    return {
        somaLinha4,
        somaColuna2,
        somaDiagonalPrincipal,
        somaTotal
    };
}

function imprimirMatriz(M) {
    console.log("\nMatriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(M[i].join('\t'));
    }
}

const M = lerMatriz5x5();
const { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTotal } = calcularSomas(M);

imprimirMatriz(M);
console.log(`\nSoma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${somaTotal}`);
