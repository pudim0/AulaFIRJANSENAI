// 4) Desenvolver um programa que pergunte 20 elementos de um vetor a e construa um vetor b de mesma
// dimensão com os mesmos elementos de a, os quais devem estar invertidos, ou seja, o primeiro elemento de a
// passa a ser o último elemento de b, e assim por diante. Apresentar os vetores a e b.

let a = [];
let b = [];
for (let i = 0; i < 20; i++) {
  a.push(Math.floor(Math.random() * 100));
  b[19 - i] = a[i];
}

console.log(a);
console.log(b);
