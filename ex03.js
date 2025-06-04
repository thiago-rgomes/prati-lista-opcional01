// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
// Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

const input = prompt('Digite a distância que deseja percorrer em Km: ');

const distancia = Number(input);

if (isNaN(distancia) || distancia < 0) {
    console.log('Entrada inválida. Por favor, digite um número positivo para a distância.');
} else {
    let precoPorKm;

    if (distancia <= 200) {
        precoPorKm = 0.50;
    } else {
        precoPorKm = 0.45;
    }

    const valorPassagem = distancia * precoPorKm;

    const valorFormatado = valorPassagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    console.log(`A distância é de ${distancia} km. O valor da passagem será: ${valorFormatado}`);
}
