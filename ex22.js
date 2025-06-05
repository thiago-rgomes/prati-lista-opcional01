// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')();

function pesquisaPopulacao() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let pessoasSalarioAte350 = 0;
    let totalPessoas = 0;

    while (true) {
        const salario = parseFloat(prompt("Digite o salário (ou ZERO para encerrar): "));
        if (salario === 0) {
            break;
        }

        const filhos = parseInt(prompt("Digite o número de filhos: "));

        totalSalario += salario;
        totalFilhos += filhos;
        totalPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            pessoasSalarioAte350++;
        }
    }

    if (totalPessoas === 0) {
        console.log("Nenhum dado foi inserido.");
        return;
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percentualSalarioAte350 = (pessoasSalarioAte350 / totalPessoas) * 100;

    console.log(`\nResultados da pesquisa:`);
    console.log(`Média de salário: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$350,00: ${percentualSalarioAte350.toFixed(2)}%`);
}

pesquisaPopulacao();
