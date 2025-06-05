// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No 
// final, mostre quais são os números pares que foram digitados e em que posições eles 
// estão armazenados.

const prompt = require('prompt-sync')();

let pares = [];
let posicoes = [];

for (let i = 1; i <= 10; i++){   
    
    const numero = Number(prompt(`Digite o ${i}º número: `));
    if (numero % 2 === 0){
        pares.push(numero);
        posicoes.push(i);
    }

}

if (pares.length > 0) {
    console.log(`Números pares digitados: ${pares}`);
    console.log(`Posições onde os números pares estão: ${posicoes}`);
} else {
    console.log("Não foram digitados números pares.");
}