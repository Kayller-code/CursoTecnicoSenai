//soma  de todos os elementos da matriz
const prompt = require('prompt-sync')();
let matriz = [];
let i, j;
let soma = 0;
for (i = 0; i <= 4; i++) {
    matriz[i] = [];
    for (j = 0; j <= 4; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}] [${j}]: `));
    }
}
for (i = 0; i <= 4; i++) { 
    for (j = 0; j <= 4; j++) {
        soma += matriz[i][j];
    }
}
console.log(`A soma de todos os elementos da matriz é: ${soma}`);