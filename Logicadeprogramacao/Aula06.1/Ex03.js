// Desenvolver um programa que pergunte oito elementos em um vetor a, construa um vetor b de mesma
// dimensão com os elementos do vetor a multiplicados por 3. Apresente ao final o vetor b. Na exibição, o
// elemento b[1] deve ser implicado pelo elemento a[1] * 3, o elemento b[2] implicado pelo a[2] * 3, e assim por
// diante, até 8.

let a = [1, 2, 3, 4, 5, 6, 7, 8];
let b = [];

for (let i = 0; i < a.length; i++) {
  b[i] = a[i] * 3;
}
console.log(b);
