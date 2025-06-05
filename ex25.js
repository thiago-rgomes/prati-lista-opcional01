// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

function gerarMatrizReal(linhas, colunas, min = -10, max = 10) {
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            const numero = Math.random() * (max - min) + min;
            matriz[i][j] = parseFloat(numero.toFixed(2));
        }
    }

    return matriz;
}

function somarColunas(matriz) {
    const colunas = matriz[0].length;
    const somaColunas = new Array(colunas).fill(0);

    for (let j = 0; j < colunas; j++) {
        for (let i = 0; i < matriz.length; i++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    return somaColunas;
}

function imprimirSomas(somas) {
    console.log("Soma de cada coluna:");
    for (let j = 0; j < somas.length; j++) {
        console.log(`Coluna ${j + 1}: ${somas[j].toFixed(2)}`);
    }
}

const M = gerarMatrizReal(15, 20);
const somas = somarColunas(M);
imprimirSomas(somas);
