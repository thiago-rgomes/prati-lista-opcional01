// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.


const prompt = require('prompt-sync')({ sigint: true });

let hoteis = [];
let reservas = [];

let idHotelCounter = 1;
let idReservaCounter = 1;


function adicionarHotel() {
    const nome = prompt('Nome do hotel: ');
    const cidade = prompt('Cidade do hotel: ');
    const totalQuartos = parseInt(prompt('Total de quartos: '), 10);

    const hotel = {
        id: idHotelCounter++,
        nome,
        cidade,
        quartosTotais: totalQuartos,
        quartosDisponiveis: totalQuartos
    };

    hoteis.push(hotel);
    console.log('Hotel adicionado com sucesso!\n');
}

function buscarHoteisPorCidade() {
    const cidade = prompt('Digite a cidade para buscar hotéis: ');
    const encontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());

    if (encontrados.length === 0) {
        console.log('Nenhum hotel encontrado nesta cidade.\n');
    } else {
        console.log('Hotéis encontrados:');
        encontrados.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
        });
        console.log();
    }
}

function fazerReserva() {
    const idHotel = parseInt(prompt('ID do hotel para reserva: '), 10);
    const nomeCliente = prompt('Nome do cliente: ');

    const hotel = hoteis.find(h => h.id === idHotel);

    if (!hotel) {
        console.log('Hotel não encontrado.\n');
        return;
    }

    if (hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--;
        const reserva = {
            idReserva: idReservaCounter++,
            idHotel: hotel.id,
            nomeCliente
        };
        reservas.push(reserva);
        console.log('Reserva realizada com sucesso! ID da reserva:', reserva.idReserva, '\n');
    } else {
        console.log('Não há quartos disponíveis neste hotel.\n');
    }
}

function cancelarReserva() {
    const idReserva = parseInt(prompt('ID da reserva a ser cancelada: '), 10);
    const index = reservas.findIndex(r => r.idReserva === idReserva);

    if (index === -1) {
        console.log('Reserva não encontrada.\n');
        return;
    }

    const reserva = reservas[index];
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    if (hotel) hotel.quartosDisponiveis++;
    reservas.splice(index, 1);
    console.log('Reserva cancelada com sucesso.\n');
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log('Nenhuma reserva cadastrada.\n');
        return;
    }

    console.log('Lista de reservas:');
    reservas.forEach(r => {
        const hotel = hoteis.find(h => h.id === r.idHotel);
        console.log(`ID Reserva: ${r.idReserva}, Cliente: ${r.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
    });
    console.log();
}

function menu() {
    while (true) {
        console.log('---- Sistema de Reserva de Hotéis ----');
        console.log('1. Adicionar Hotel');
        console.log('2. Buscar Hotéis por Cidade');
        console.log('3. Fazer Reserva');
        console.log('4. Cancelar Reserva');
        console.log('5. Listar Reservas');
        console.log('6. Sair');
        const escolha = prompt('Escolha uma opção: ');

        switch (escolha) {
            case '1':
                adicionarHotel();
                break;
            case '2':
                buscarHoteisPorCidade();
                break;
            case '3':
                fazerReserva();
                break;
            case '4':
                cancelarReserva();
                break;
            case '5':
                listarReservas();
                break;
            case '6':
                console.log('Saindo do sistema...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.\n');
        }
    }
}

menu();
