// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const prompt = require('prompt-sync')();

function lerMatriz30x30() {
    const V = [];
    for (let i = 0; i < 30; i++) {
        V[i] = [];
        for (let j = 0; j < 30; j++) {
            const valor = parseInt(prompt(`Digite V[${i + 1}][${j + 1}]: `));
            V[i][j] = valor;
        }
    }
    return V;
}

function processarMatriz(V, A) {
    let contador = 0;
    const X = [];

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                contador++;
            } else {
                X.push(V[i][j]);
            }
        }
    }

    return { contador, X };
}

function imprimirResultados(A, contador, X) {
    console.log(`\nO valor ${A} aparece ${contador} vezes na matriz V.`);
    console.log(`\nMatriz X (elementos diferentes de ${A}):`);
    
    for (let i = 0; i < X.length; i++) {
        process.stdout.write(X[i] + '\t');
        if ((i + 1) % 10 === 0) console.log();
    }
}

const A = parseInt(prompt("Digite o valor de A: "));
const V = lerMatriz30x30();
const { contador, X } = processarMatriz(V, A);
imprimirResultados(A, contador, X);
