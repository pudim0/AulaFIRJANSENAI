// 5) Desenvolver um programa que armazene nome e nota das PR1 e PR2 de 5 alunos, calcule e armazene a média,
// armazene também a situação do aluno (AP ou RP). Exibir ao final uma listagem contendo nomes, notas, médias e
// situação de cada aluno.

let nome = ["Rodinei", "João", "Maria", "Cabral", "Ribamar"];
let nota1 = [];
let nota2 = [];
let media = [];
let situacao = [];

for (let i = 0; i < nome.length; i++) {
  nota1.push(Math.floor(Math.random() * (10 - 0) + 0)); // notas aleatórias de máx 10 e mínimo 0
  nota2.push(Math.floor(Math.random() * (10 - 0) + 0));

  media[i] = (nota1[i] + nota2[i]) / 2; 

  if (media[i] < 5) {
    situacao[i] = "reprovado";
  } else {
    situacao[i] = "aprovado";
  }

  console.log(
    `${nome[i]} | PR1: ${nota1[i]} | PR2: ${nota2[i]} | Média: ${media[i]} | ${situacao[i]}`,
  );
}
