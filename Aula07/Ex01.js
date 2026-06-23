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
