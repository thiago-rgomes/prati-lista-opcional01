// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h,
//  exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km 
// acima da velocidade permitida.

const prompt = require('prompt-sync')();

const input = prompt('Digite a velocidade do carro: ');

const velocidade = Number(input)


if (isNaN(velocidade) || !Number.isInteger(velocidade) || velocidade < 0) {
    console.log('Entrada inválida. Por favor, digite um número inteiro.');
} else {
    const kmAcima = velocidade - 80;
    const valorMulta = kmAcima * 5; 

    if(kmAcima > 0) {
        const valorFormatado = valorMulta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log(`Você passou ${kmAcima} km/h acima do permitido. Valor da multa: R$${valorFormatado}`)
    } else {
        console.log('Você não foi multado.')
    }
    
}