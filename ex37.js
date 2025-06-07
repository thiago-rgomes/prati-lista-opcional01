// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require('prompt-sync')();

function lerGabarito() {
    const G = [];
    console.log("Digite o gabarito (20 letras):");
    for (let i = 0; i < 20; i++) {
        G[i] = prompt(`Questão ${i + 1}: `).toUpperCase();
    }
    return G;
}

function lerRespostasAluno(numeroAluno) {
    const R = [];
    console.log(`\nAluno ${numeroAluno}: Digite as respostas (20 letras):`);
    for (let i = 0; i < 20; i++) {
        R[i] = prompt(`Resposta ${i + 1}: `).toUpperCase();
    }
    return R;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        if (respostas[i] === gabarito[i]) {
            acertos++;
        }
    }
    return acertos;
}

const gabarito = lerGabarito();

for (let aluno = 1; aluno <= 50; aluno++) {
    const respostas = lerRespostasAluno(aluno);
    const acertos = contarAcertos(gabarito, respostas);

    console.log(`Aluno ${aluno} teve ${acertos} acertos.`);
    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}
