// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

function gerarMatrizAleatoria(linhas, colunas, min = -10, max = 10) {
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    return matriz;
}

function contarNegativosPorLinha(matriz) {
    const vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        vetorC[i] = contador;
    }

    return vetorC;
}

function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

function imprimirVetor(vetor) {
    console.log("\nVetor C (quantidade de negativos por linha):");
    for (let i = 0; i < vetor.length; i++) {
        console.log(`Linha ${i + 1}: ${vetor[i]} negativos`);
    }
}


const M = gerarMatrizAleatoria(6, 8);
imprimirMatriz(M);

const C = contarNegativosPorLinha(M);
imprimirVetor(C);
