// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

function transformarObjeto(obj, funcao) {
  const resultado = {};

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      resultado[chave] = funcao(obj[chave], chave);
    }
  }

  return resultado;
}

const entrada = {
  a: 1,
  b: 2,
  c: 3
};

const dobro = transformarObjeto(entrada, valor => valor * 2);

console.log(dobro);

