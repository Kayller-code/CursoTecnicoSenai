const prompt = require('prompt-sync')();
let matriz = [];
let i, j;
let soma = 0;

for (i = 0; i <= 4; i++) {
    matriz[i] = []
    for (j = 0; j <= 4; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}] [${j}]: `))
    }
}

for (let i = 0; i <= 4; i++) {
    let linha = [];
    for (let j = 0; j <= 4; j++) {
        if (j === 2) {
            linha.push(matriz[i][j]);
            soma += matriz[i][j];   
        } else {
            linha.push('x');          
        }
    }
    console.log(linha.join(' | '));
}
console.log(`A soma da linha 4 é: ${soma}`)