//Desenvolver um programa que pergunte um número de 3 casas, e apresente como resultado somente o
//algarismo das centenas.

let n1 = 249;
let centena = n1 / 100;

if (n1 >= 1000) {
  console.log(`Digite um número entre 100 e 999`);
} else if (n1 >= 100 && n1 <= 999) {
  console.log(centena.toFixed(0));
}
