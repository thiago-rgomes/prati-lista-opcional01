// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const prompt = require('prompt-sync')();

function lerVetor(mensagem, tamanho) {
    const vetor = [];
    console.log(mensagem);
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = parseInt(prompt(`Posição ${i + 1}: `));
    }
    return vetor;
}

const gabarito = lerVetor("\nDigite o gabarito de 13 respostas:", 13);

for (let i = 0; i < 100; i++) {
    console.log(`\nApostador ${i + 1}`);
    const numeroCartao = prompt("Número do cartão: ");
    const respostas = lerVetor("Digite as 13 respostas do apostador:", 13);

    let acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Cartão ${numeroCartao} teve ${acertos} acertos.`);
    if (acertos === 13) {
        console.log("Parabéns, você é o GANHADOR!");
    }
}
