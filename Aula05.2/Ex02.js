/*2) Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500.
Utilize um laço que varie de 2 em 2.*/

let i = 0;
let soma = 0;

do {
  if (i % 2 == 0) {
    soma = i + soma;
  }
  i++;
} while (i <= 500);

console.log(soma);


// let i2 = 0
// let soma2 = 0

// do {
//     soma2 = i2 + soma2
//     i2+=2
// } while (i2<=500)
//     console.log(soma2)