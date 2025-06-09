// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
    nome: 'Maria',
    idade: 28,
    hobbies: ['ler', 'nadar'],
    notas: [6, 9, 10],
    cidade: 'São Paulo',
    estudante: true
};

function filtrarArrays(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

console.log(filtrarArrays(dados));