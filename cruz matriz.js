const prompt = require('prompt-sync')();
let matriz = [];
const tamanho = 5; 
const meio = Math.floor(tamanho / 2);

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}][${j}]: `));
    }
}

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        if (i === meio || j === meio) {
            process.stdout.write(' x ');
        } else {
            const num = String(matriz[i][j]);
            process.stdout.write(` ${num} `);
        }
    }
    console.log();
}