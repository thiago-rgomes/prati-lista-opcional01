// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};

    for (const transacao of transacoes) {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
    }

    return resultado;
}

const transacoes = [
    { id: 1, valor: 100, data: '2025-06-01', categoria: 'Alimentação' },
    { id: 2, valor: 200, data: '2025-06-02', categoria: 'Transporte' },
    { id: 3, valor: 50, data: '2025-06-03', categoria: 'Alimentação' },
    { id: 4, valor: 300, data: '2025-06-04', categoria: 'Moradia' },
    { id: 5, valor: 150, data: '2025-06-05', categoria: 'Transporte' }
];

const resultado = agruparTransacoesPorCategoria(transacoes);
console.log(resultado);