// Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

function gerarMatrizAleatoria(linhas, colunas, min = 1, max = 10) {
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    return matriz;
}

function produtoElementoPorElemento(A, B) {
    const linhas = A.length;
    const colunas = A[0].length;
    const P = [];

    for (let i = 0; i < linhas; i++) {
        P[i] = [];
        for (let j = 0; j < colunas; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }

    return P;
}

function imprimirMatriz(nome, matriz) {
    console.log(`\nMatriz ${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

const A = gerarMatrizAleatoria(3, 5);
const B = gerarMatrizAleatoria(3, 5);
const P = produtoElementoPorElemento(A, B);

imprimirMatriz('A', A);
imprimirMatriz('B', B);
imprimirMatriz('P = A * B (elemento a elemento)', P);
