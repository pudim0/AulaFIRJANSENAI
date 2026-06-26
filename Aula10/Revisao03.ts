class Aluno {
  nome: string;
  idade: number;
  frequencia: number;

  constructor(nome: string, idade: number, frequencia: number) {
    this.nome = nome;
    this.idade = idade;
    this.frequencia = frequencia;
  }
}
const Alunos: Aluno[] = [
  new Aluno("João", 20, 80), //1
  new Aluno("Maria", 15, 30), //2
  new Aluno("Pedro", 21, 70), //3
  new Aluno("Ana", 21, 85), //4
  new Aluno("Lucas", 17, 95), //5
  new Aluno("Carla", 15, 60), //6
  new Aluno("Rafael", 17, 50), //7
  new Aluno("Juliana", 16, 90), //8
  new Aluno("Gustavo", 19, 85), //9
  new Aluno("Fernanda", 13, 95), //10
];
function classificarAluno(aluno: Aluno): string {
  if (aluno.frequencia <= 60) {
    return "Baixa Frequência";
  } else if (aluno.frequencia <= 80) {
    return "Frequência Média";
  } else {
    return "Alta Frequência";
  }
}
for (const aluno of Alunos) {
  console.log(`${aluno.nome}: ${classificarAluno(aluno)}`);
}

let menordeIdade = Alunos[0];
let contador = 0;
let quantidadeMenores = 0;

while (contador < Alunos.length) {
  if (Alunos[contador].idade < 18) {
    menordeIdade = Alunos[contador];

    console.log(
      `Alunos que são menores de idade: ${menordeIdade.nome} com ${menordeIdade.idade} anos.`,
    );
    quantidadeMenores++;
  }
  i++;
}
console.log(`Total de alunos: ${Alunos.length}`);
console.log(
  `Quantidade de alunos maiores de idade: ${Alunos.length - quantidadeMenores}`,
);
console.log(
  `Alunos frequentes: ${Alunos.filter((aluno) => aluno.frequencia > 80).length}`,
);
console.log(
  `Alunos com baixa frequência: ${Alunos.filter((aluno) => aluno.frequencia <= 60).length}`,
);
