// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

let aleatorioVetor = [];

for (let i = 1; i <= 20; i++){   
    
    const randomNumber = Math.floor(Math.random() * 100);
    aleatorioVetor.push(randomNumber)    

}

console.log(`Os números gerados foram: ${aleatorioVetor.join(', ')}`);


aleatorioVetor.sort((a, b) => a - b);

console.log(`Os números em ordem crescente são: ${aleatorioVetor.join(', ')}`);