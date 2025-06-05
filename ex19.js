// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de 
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

let horarios = [];

for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;

    console.log(`\nHorário ${i + 1}:`);

    while (true) {
        hora = parseInt(prompt('Digite a hora (0-23): '), 10);
        if (hora >= 0 && hora <= 23) break;
        console.log('Hora inválida. Tente novamente.');
    }

    while (true) {
        minuto = parseInt(prompt('Digite os minutos (0-59): '), 10);
        if (minuto >= 0 && minuto <= 59) break;
        console.log('Minuto inválido. Tente novamente.');
    }

    while (true) {
        segundo = parseInt(prompt('Digite os segundos (0-59): '), 10);
        if (segundo >= 0 && segundo <= 59) break;
        console.log('Segundo inválido. Tente novamente.');
    }

    horarios.push({ hora, minuto, segundo });
}

console.log('\n--- Horários informados (HH.MM.SS) ---');
horarios.forEach(h => {
    
    const formatado = `${String(h.hora).padStart(2, '0')}.${String(h.minuto).padStart(2, '0')}.${String(h.segundo).padStart(2, '0')}`;
    console.log(formatado);
});

