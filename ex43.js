// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = {
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo'
};

let obj2 = {
    idade: 30,
    email: 'ana@gmail.com'
};

let combinado = combinarObjetos(obj1, obj2);

console.log(combinado);