// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let fibonacci = [1, 1];

for (i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log('Os primeiros 10 números da sequência de Fibonacci são: ' + fibonacci.join(', '));