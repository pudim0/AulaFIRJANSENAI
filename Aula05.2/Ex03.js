//3) Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 20.

let i = 0;

do {
  if (i % 4 === 0) console.log(i);
  i++;
} while (i <= 20);
