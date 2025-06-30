const prompt = require('prompt-sync')();
let matriz = [];
let i, j;
soma = 0;

for (i = 0; i <= 4; i++) {
    matriz[i] = []
    for (j = 0; j <= 4; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}] [${j}]: `))
    }
}

for (i = 0; i <= 4; i++) {
    for (j = 0; j <= 4; j++) {
        if (i + j == matriz.length - 1) {
            process.stdout.write(` ${matriz[i][j]} `)
            soma += matriz[i][j]
        } else {
            process.stdout.write(' x ')
        }
    }
    console.log();
}
console.log(`A soma dos elementos da diagonal secundária é: ${soma}`);