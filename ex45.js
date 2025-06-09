// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

function contarOcorrencias(array) {
    let resultado = {};
    for (let item of array) {
        if (resultado[item]) {
            resultado[item]++;
        } else {
            resultado[item] = 1;
        }
    }
    return resultado;
}

let palavras = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

console.log(contarOcorrencias(palavras));

