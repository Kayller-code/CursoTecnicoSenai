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

for (i = 0; i <= 4; i++) {
    if (i === 3) {
        console.log(matriz[i].join(' | '))
        soma+= matriz[i].reduce((acc, val) => acc + val, 0);
    } else {
        console.log(['x', 'x', 'x', 'x', 'x'].join(' | '))
    }

}
console.log(`A soma da linha 4 é: ${soma}`)