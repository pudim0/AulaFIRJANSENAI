// 3) Desenvolver um programa que crie uma matriz de 4 linhas e 4 colunas. Pergunte ao usuário nomes de pessoas
// para preencher toda a matriz. Em seguida o programa perguntará ao usuário as coordenadas (linha e coluna)
// que deseja visualizar o conteúdo correspondente na matriz. Enquanto o usuário informar coordenadas válidas, o
// programa exibirá o conteúdo correspondente. No momento em que forem inseridas coordenadas não válidas o
// programa será encerrado com a mensagem na tela “Coordenadas inválidas”.

let linha = 2;
let coluna = 0;
let nomes = [
  ["Rodinei", "João", "Maria", "Cabral"],
  ["Ribamar", "José", "Joaquina", "Cleber"],
  ["Ana", "Paulo", "Lucas", "Fernanda"],
  ["Carlos", "Marina", "Pedro", "Julia"],
];

if (linha >= 0 && linha < 4 && coluna >= 0 && coluna < 4) {
  console.log(nomes[linha][coluna]);
  linha++;
} else {
  console.log("Coordenadas inválidas");
}
