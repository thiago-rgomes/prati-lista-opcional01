// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.


const vendas = [
  { vendedor: 'A', valor: 100 },
  { vendedor: 'B', valor: 200 },
  { vendedor: 'A', valor: 150 },
  { vendedor: 'C', valor: 300 },
  { vendedor: 'B', valor: 50 }
];

function somarVendas(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.vendedor] = (acc[venda.vendedor] || 0) + venda.valor;
    return acc;
  }, {});
}

const resultado = somarVendas(vendas);

console.log(resultado);
