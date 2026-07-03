//Desenvolver um programa que pergunte um número e informe como resposta se o número informado é par ou
//é ímpar.

/*let n1 = 4
//UTILIZE A PORRA DO IF NESSA DESGRAÇAKKKKKKKKKKKKKKKKKKK
switch(n1) {
    case n1 % 2 == 0:
        console.log(`${n1} é par`)
    default:
        console.log(`${n1} não é par`)
}


switch (true) {
    case n1 % 2 === 0:
        console.log(`${n1} é par`);
        break;

    default:
        console.log(`${n1} não é par`);
}*/

let n = 5;

let r = n % 2;

switch (r) {
  case 0:
    console.log("par");
    break;
  case 1:
    console.log("ímpar");
    break;
  default:
    console.log("Você não deveria ver isso");
}
