const prompt = require('prompt-sync')();
let vetor = [];
let i;
for (i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número inteiro: `));
}
console.log('Números pares:');
for (i = 0; i < 5; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}
