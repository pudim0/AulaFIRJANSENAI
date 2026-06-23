// 2) Desenvolver um programa que crie uma matriz de 5 linhas e 2 colunas. Pergunte ao usuário números para
// preencher toda a matriz, e ao final, exiba a matriz inteira e a média dos números da matriz.

let a = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  a[i] = [];
  for (let j = 0; j < 2; j++) {
    a[i][j] = Math.floor(Math.random() * 10);
    soma += a[i][j];
  }
}

console.table(a);
let media = soma / (5 * 2);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);
