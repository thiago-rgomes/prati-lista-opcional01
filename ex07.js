// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
//carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
//cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
//(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
//mostre o preço a ser pago de acordo com os dados a seguir:

//Carros populares
//- Até 100 Km percorridos: R$ 0,20 por Km
//- Acima de 100 Km percorridos: R$ 0,10 por Km
//Carros de luxo
//- Até 200 Km percorridos: R$ 0,30 por Km
//- Acima de 200 Km percorridos: R$ 0,25 por Km


const prompt = require('prompt-sync')();

function validarInteiroPositivo(input) {
    return !isNaN(input) && Number.isInteger(Number(input)) && Number(input) > 0;
}

function calcularTotal(carroTipo, dias, kmPercorrido) {
    let valorTotal;
    if (carroTipo === 'Popular') {
        if (kmPercorrido <= 100) {
            valorTotal = dias * 90 + kmPercorrido * 0.2;
        } else {
            valorTotal = dias * 90 + kmPercorrido * 0.1;
        }
    } else {
        if (kmPercorrido <= 200) {
            valorTotal = dias * 150 + kmPercorrido * 0.3;
        } else {
            valorTotal = dias * 150 + kmPercorrido * 0.25;
        }
    }
    return valorTotal;
}

const escolhaCarro = prompt('Digite o número da opção (1 ou 2): ');

let carroTipo;
if (escolhaCarro === '1') {
  carroTipo = 'Popular';
} else if (escolhaCarro === '2') {
  carroTipo = 'Luxo';
} else {
  console.log('Opção inválida! Escolha 1 ou 2.');
  return;
}

console.log(`Você escolheu o carro tipo: ${carroTipo}`);

const dias = prompt('Digite o número de dias que foi alugado: ');

if (!validarInteiroPositivo(dias)) {
    console.log('Digite um número inteiro positivo para os dias de aluguel!');
    return;
}

const kmPercorrido = prompt('Digite o Km percorrido: ');

if (!validarInteiroPositivo(kmPercorrido)) {
    console.log('Digite um número inteiro positivo para os Km percorridos!');
    return;
}

const valorTotal = calcularTotal(carroTipo, Number(dias), Number(kmPercorrido));

console.log(`O valor total será de R$ ${valorTotal.toFixed(2)}`);