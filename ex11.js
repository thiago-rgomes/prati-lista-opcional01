// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão 
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os 
// valores da sequência.

const prompt = require('prompt-sync')();

let total = 0;

const primeiroTermo = Number(prompt('Digite o primeiro termo da PA: '));
const razao = Number(prompt('Digite a razão da PA: '));
let dezElementos = [primeiroTermo];

for(let i = 2; i <= 10; i++){

    let elemento = primeiroTermo + (i-1)*razao;
    dezElementos.push(elemento);
    total += elemento;
}

total += primeiroTermo;

console.log(dezElementos);
console.log(total);

