//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
//mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
//perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
//funcionário.

const prompt = require('prompt-sync')();

function calcularSalarios() {
  let totalHomens = 0;
  let totalMulheres = 0;
  let continuar = true;

  while (continuar) {
    let salario = parseFloat(prompt("Digite o salário do funcionário: R$ "));
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

    while (sexo !== 'M' && sexo !== 'F') {
      console.log("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.");
      sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();
    }

    if (sexo === 'M') {
      totalHomens += salario;
    } else if (sexo === 'F') {
      totalMulheres += salario;
    }

    let resposta = prompt("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    if (resposta !== 'S') {
      continuar = false; 
    }
  }
  
  console.log("\nTotal de salários pagos aos homens: R$ " + totalHomens.toFixed(2));
  console.log("Total de salários pagos às mulheres: R$ " + totalMulheres.toFixed(2));
}

calcularSalarios();

