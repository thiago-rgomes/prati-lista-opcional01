// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync')();

function lerVetor(tamanho) {
    const vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = parseFloat(prompt(`Digite o valor da posição ${i + 1}: `));
    }
    return vetor;
}

function executarOperacao(vetor, operacao) {
    switch (operacao) {
        case 1:
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log(`Soma dos elementos: ${soma}`);
            break;

        case 2:
            const produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log(`Produto dos elementos: ${produto}`);
            break;

        case 3:
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log(`Média dos elementos: ${media}`);
            break;

        case 4:
            const ordenado = [...vetor].sort((a, b) => a - b);
            console.log("Vetor em ordem crescente:", ordenado);
            break;

        case 5:
            console.log("Vetor original:", vetor);
            break;

        default:
            console.log("Operação inválida.");
    }
}

const vetor = lerVetor(6);
const operacao = parseInt(prompt(`
Digite o código da operação:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordenar em ordem crescente
5 - Mostrar o vetor
Opção: `));

executarOperacao(vetor, operacao);
    