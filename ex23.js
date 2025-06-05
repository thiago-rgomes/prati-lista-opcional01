// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

function criarMatrizIdentidade(tamanho) {
    const MI = [];

    for (let i = 0; i < tamanho; i++) {
        MI[i] = [];
        for (let j = 0; j < tamanho; j++) {
            MI[i][j] = (i === j) ? 1 : 0;
        }
    }

    return MI;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const matrizIdentidade = criarMatrizIdentidade(7);
console.log("Matriz Identidade 7x7:\n");
imprimirMatriz(matrizIdentidade);
