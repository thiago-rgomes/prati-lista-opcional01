//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.


const prompt = require('prompt-sync')();

function escolherComputador() {
    const computador = Math.floor(Math.random() * 5) + 1;
    return computador;
}

function determinarAcerto(usuario, computador) {
    if (usuario === computador) {
        console.log("Você acertou!")
        return true;
    } else {
        console.log("Você errou!")
        return false;
    }
}

function jogar() {

    const computador = escolherComputador();
    let acertou = false;

    while (!acertou) {

        const escolhaUsuario = Number(prompt('Escolha um número de 0 a 5: '));

        if (isNaN(escolhaUsuario) || !Number.isInteger(escolhaUsuario) || escolhaUsuario < 0 || escolhaUsuario > 5) {
            console.log('Valor inválido. Por favor, digite um número entre 0 e 5.');
            return
        } else {
            acertou = determinarAcerto(escolhaUsuario, computador);
        }

    }
}

jogar()