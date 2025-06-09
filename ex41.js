// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

const prompt = require('prompt-sync')();

let pessoa = {
    nome: 'Maria',
    idade: 30
};

console.log(pessoa.idade);

pessoa.email = prompt('Digite o email da pessoa: ');

console.log(pessoa);
