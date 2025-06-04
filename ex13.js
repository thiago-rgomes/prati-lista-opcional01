// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.


function gerarFibonacci(tamanho) {
    let fibonacci = [1, 1];

    for (let i = 2; i < tamanho; i++) {
        let proximo = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(proximo);
    }

    return fibonacci;
}

let fibonacciVetor = gerarFibonacci(15);

console.log(fibonacciVetor);


