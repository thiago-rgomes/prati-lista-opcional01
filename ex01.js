// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. 
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de 
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const inputOne = prompt('Quantos cigarros você fuma por dia? ');
const porDia = Number(inputOne);

const inputTwo = prompt('Por quantos anos você fumou? ');
const anos = Number(inputTwo);


if (isNaN(porDia) || !Number.isInteger(porDia) || isNaN(anos) || !Number.isInteger(anos) || porDia < 0 || anos < 0) {
    console.log('Entrada inválida. Por favor, digite apenas números inteiros positivos.');
} else { 
    const quantidadeTotal = porDia * (anos * 365);

    const tempoPerdidoMinutos = quantidadeTotal * 10;

    const diasPerdidos = Math.floor(tempoPerdidoMinutos / 1440)

    console.log(`Você perdeu aproximadamente  ${diasPerdidos} dias de vida.`)
}