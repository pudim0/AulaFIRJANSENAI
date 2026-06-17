//Desenvolver um programa que pergunte dois números inteiros, e apresente como resultado se o segundo
//número informado é ou não um divisor do primeiro número informado.

let n1 = 5;
let n2 = 5;

if (n1 % n2 == 0) {
  console.log(`${n2} é divisor de ${n1}`);
} else {
  console.log(`${n2} não é divisor de ${n1}`);
}
