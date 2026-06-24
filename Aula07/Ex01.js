/* 1. Sistema de Gestão Escolar (Objetos + Vetores + Laços)
// Este exercício foca em agrupar dados heterogêneos (objetos) dentro de uma lista (vetor) e processá-los com laços
// .
// Enunciado: Crie um programa em TypeScript que gerencie uma lista de alunos.
// Estrutura: Cada aluno deve ser um objeto com nome, idade e um vetor de 4 notas
// .
// Funcionalidade: Utilize um laço for...of para percorrer o vetor de objetos
// . Para cada aluno, utilize um laço interno (ou método de acumulador) para calcular a média das notas
// .
// Saída: Exiba o nome do aluno, suas notas e se ele está "Aprovado" (média >= 7) ou "Reprovado"
*/
function gerarnotasaleatorio() {
  return Math.floor(Math.random() * 10);
}

let alunos = [
  {
    nome: "Ana",
    idade: 18,
    notas: [
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
    ],
    situacao: "",
  },
  {
    nome: "João",
    idade: 19,
    notas: [
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
    ],
    situacao: "",
  },
  {
    nome: "Maria",
    idade: 20,
    notas: [
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
    ],
    situacao: "",
  },
  {
    nome: "Pedro",
    idade: 21,
    notas: [
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
      gerarnotasaleatorio(),
    ],
    situacao: "",
  },
];

for (const aluno of alunos) {
  let soma = 0;

  for (const nota of aluno.notas) {
    soma += nota;
  }

  let media = soma / aluno.notas.length;

  aluno.situacao = media >= 7 ? "Aprovado" : "Reprovado";

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Notas: ${aluno.notas.join(", ")}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Situação: ${aluno.situacao}`);
  console.log("-------------------------");
}
