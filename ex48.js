// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

function combinarInventarios(inventarioA, inventarioB) {
  const combinado = { ...inventarioA };

  for (let item in inventarioB) {
    if (combinado.hasOwnProperty(item)) {
      combinado[item] += inventarioB[item];
    } else {
      combinado[item] = inventarioB[item]; 
    }
  }

  return combinado;
}

const inventarioLojaA = {
  maçã: 10,
  banana: 5,
  laranja: 8
};

const inventarioLojaB = {
  banana: 7,
  abacaxi: 4,
  maçã: 3
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log(inventarioCombinado);

