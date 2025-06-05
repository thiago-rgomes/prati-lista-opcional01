// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

function calcularPesoIdeal(alt, sexo){
    if (sexo === 'masculino') {
        pesoIdeal = (72.7 * alt - 58).toFixed(2);
    } else {
        pesoIdeal = (62.1 * alt - 44.7).toFixed(2);
    }
    console.log(`O peso ideal para você é: ${pesoIdeal} Kg.`)
}

calcularPesoIdeal(1.70, 'masculino');
calcularPesoIdeal(1.80, 'masculino');
calcularPesoIdeal(1.70, 'feminino');
