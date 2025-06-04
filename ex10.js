//10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
//cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
//a) O somatório entre todos os valores;
//b) Qual foi o menor valor digitado;
//c) A média entre todos os valores;
//d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let menorValor = Infinity;
let pares = 0;

let continuar = 's';

do {
  let numero;

  while (true) {
    let input = prompt('Digite um número: ');
    numero = Number(input);

    if (!isNaN(numero) && Number.isInteger(numero)) {
      break;
    } else {
      console.log('Por favor, digite um número válido!');
    }
  }

  soma += numero;
  contador++;

  if (numero < menorValor) {
    menorValor = numero;
  }

  if (numero % 2 === 0) {
    pares++;
  }

  while (true) {
    continuar = prompt('Você deseja continuar? (s/n): ').toLowerCase();
    if (continuar === 's' || continuar === 'n') {
      break;
    } else {
      console.log('Resposta inválida! Por favor, digite "s" para sim ou "n" para não.');
    }
  }

} while (continuar === 's');

const media = soma / contador;

console.log(`\nResultados:`);
console.log(`a) Somatório entre todos os valores: ${soma}`);
console.log(`b) Menor valor digitado: ${menorValor}`);
console.log(`c) Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`d) Quantidade de valores pares: ${pares}`);

