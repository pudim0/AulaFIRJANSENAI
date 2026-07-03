/*1) Desenvolver um programa que apresente todos os valores numéricos inteiros pares situados na faixa de 100 a
200.*/

let i = 0;

do {
  if (i >= 100 && i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 200);
console.log("isso aparece depois dos números");


// let i2 = 100
// do{
//     console.log(i2)
//     i2 += 2
// } while(i2 <=200)

