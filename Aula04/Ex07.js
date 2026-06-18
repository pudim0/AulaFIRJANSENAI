/*7) Elabore um programa que pergunte dois números e também qual operação a ser realizada com estes dois
números de acordo com a tabela abaixo (esta tabela deve aparecer como menu de escolha para o usuário). Caso
o usuário digite um código que não esteja na tabela, informar que o código inserido está errado.
Código Operação
a Média aritmética entre os números digitados
b Diferença do maior pelo menor
c Produto entre os números digitados
d Divisão do primeiro pelo segundo*/

let n1 = 57;
let n2 = 3.123;
let choice = "d".toLowerCase();

switch (choice) {
  case "a":
    console.log(`Aqui está a média dos números digitados: ${(n1 + n2) / 2}`);
    break;
  case "b":
    if (n1 > n2) {
      console.log(`Aqui está a diferença do maior pelo menor: ${n1 - n2}`);
    } else {
      console.log(`Aqui está a diferença do maior pelo menor: ${n2 - n1}`);
    }
    break;
  case "c":
    console.log(`Aqui está o produto entre os números digitados: ${n1 * n2}`);
    break;
  case "d":
    console.log(`Aqui está a divisão do primeiro pelo segundo ${n1 / n2}`);
    break;
  default:
    console.log("Você é um animal, usuário estúpido!");
}
