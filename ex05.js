//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();


function escolherComputador() {
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const escolhaAleatoria = Math.floor(Math.random() * 3);
  return escolhas[escolhaAleatoria];
}


function determinarVencedor(usuario, computador) {
  if (usuario === computador) {
    return 'Empate!';
  }

  if (
    (usuario === 'pedra' && computador === 'tesoura') ||
    (usuario === 'papel' && computador === 'pedra') ||
    (usuario === 'tesoura' && computador === 'papel')
  ) {
    return 'Você venceu!';
  } else {
    return 'Você perdeu!';
  }
}


function jogar() {
  
  const escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura: ').toLowerCase();

  if (!['pedra', 'papel', 'tesoura'].includes(escolhaUsuario)) {
    console.log('Escolha inválida. Tente novamente.');
    return;
  }

  const escolhaComputador = escolherComputador();
  console.log(`O computador escolheu: ${escolhaComputador}`);

  const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
  console.log(resultado);
}

jogar();
