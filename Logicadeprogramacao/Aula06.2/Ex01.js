// 1) Desenvolver um programa que crie uma matriz com 5 linhas e 3 colunas. Pergunte ao usuário o conteúdo desta
// matriz e ao final exiba a matriz inteira.

let a = [];

for (let i = 0; i < 5; i++) {
  a[i] = [];

  for (let j = 0; j < 3; j++) {
    a[i][j] = Math.floor(Math.random() * 100);
  }
}

console.table(a);
