const prompt = require('prompt-sync')();

function media(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

function dados() {
    let nome;
    let vetor = [];

    nome = prompt('Digite o nome do aluno: ');
    for (let i = 0; i <= 4; i++) {
        vetor[i] = Number(prompt(`Digite a ${i + 1}ª nota do aluno: `));
    }

    let mediaAluno = media(...vetor);

    console.log(`A média do aluno ${nome} foi: ${mediaAluno.toFixed(2)}`);
}

dados();
