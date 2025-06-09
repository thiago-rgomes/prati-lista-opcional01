// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

let exemplo = {
    nome: 'Bruno',
    idade: 40,
    cidade: 'São Paulo',
    profissao: 'médico',
    ativo: true
};


function contarStrings(obj) {
    let contador = 0;
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }
    return contador;
}


console.log(contarStrings(exemplo));
