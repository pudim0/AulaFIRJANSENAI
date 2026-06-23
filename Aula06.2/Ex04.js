// 4) Desenvolver um programa que pergunte o conteúdo de duas matrizes a e b, cada uma com 5 linhas e 3 colunas,
// construa uma matriz c de mesma dimensão, a qual é formada pela soma dos elementos da matriz a com a matriz
// b. Apresentar ao final o conteúdo das três matrizes.

let a = [];
let b = [];
let c = [];

for (let i = 0; i < 5; i++) {
  a[i] = [];
  for (let j = 0; j < 2; j++) {
    a[i][j] = Math.floor(Math.random() * 100);
  }
}
for (let i = 0; i < 5; i++) {
  b[i] = [];
  for (let j = 0; j < 2; j++) {
    b[i][j] = Math.floor(Math.random() * 100);
  }
}
for (let i = 0; i < 5; i++) {
  c[i] = [];
  for (let j = 0; j < 2; j++) {
    c[i][j] = b[i][j] + a[i][j];
  
  }
}

console.table(a)
console.table(b)
console.table(c)

