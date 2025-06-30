const prompt = require('prompt-sync')();
let matriz = [];
let i, j;

for (i = 0; i <= 4; i++) {
    matriz[i] = []
    for (j = 0; j <= 4; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}] [${j}]: `))
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (i === j || i + j === matriz.length - 1) {
            process.stdout.write(' x ');
        } else {
            const num = String(matriz[i][j]);
            process.stdout.write(` ${num} `);
        }
    }
    console.log();
}