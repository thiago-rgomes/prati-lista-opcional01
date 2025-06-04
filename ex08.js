// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
//podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
//sistema funciona assim:
//- até 10 h de atividade no mês: ganha 2 pontos por hora
//- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
//- acima de 20 h de atividade no mês: ganha 10 pontos por hora
//- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
//Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
//Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.


const prompt = require('prompt-sync')();

const horasAtividade = Number(prompt('Digite quantas horas de atividade física você faz no mês: '));



if (isNaN(horasAtividade) || !Number.isInteger(horasAtividade) || horasAtividade < 0) {
    console.log('Entrada inválida. Por favor, digite um número inteiro.');
} else {
    let pontos;

    if(horasAtividade <= 10) {
        pontos = horasAtividade * 2
    } else if(horasAtividade <= 20) {
        pontos = horasAtividade * 5
    } else {
        pontos = horasAtividade * 10
    }

    const faturamento = pontos * 0.05;

    console.log(`Você fez ${pontos} pontos e ganhou R$${faturamento.toFixed(2)}.`);
    
}