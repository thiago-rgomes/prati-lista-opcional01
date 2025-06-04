// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos 
// e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

function lerSegmento(nome) {
    let segmento;
    do {
        segmento = Number(prompt(`Digite o comprimento do ${nome} segmento: `));
        if (isNaN(segmento) || segmento <= 0) {
            console.log('Valor inválido. Por favor, digite um número positivo!');
        }
    } while (isNaN(segmento) || segmento <= 0);
    return segmento;
}

const segmento1 = lerSegmento('primeiro');
const segmento2 = lerSegmento('segundo');
const segmento3 = lerSegmento('terceiro');

const podeFormarTriangulo = (segmento1 < segmento2 + segmento3) && (segmento2 < segmento1 + segmento3) && (segmento3 < segmento1 + segmento2);

if (podeFormarTriangulo) {
    console.log('Os segmentos podem formar um triângulo!');
} else {
    console.log('Os segmentos NÃO podem formar um triângulo!');
}
