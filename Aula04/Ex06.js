//6) Desenvolver um programa que pergunte o peso de uma pessoa e também pergunte o código do planeta no qual
//ela gostaria de obter como resposta o valor do seu peso neste referido planeta. As informações da tabela abaixo
//(somente as colunas Código e Planeta) devem aparecer como menu de escolha ao usuário:
//Código Planeta Gravidade Relativa
//1 Mercúrio 0,37
//2 Vênus 0,88
//3 Marte 0,38
//4 Júpiter 2,64
//5 Saturno 1,15
//6 Urano 1,17
//Para calcular o peso no planeta escolhido, utilize a fórmula pesoNoPlaneta = (pesoNaTerra/10) *
//gravidadeRelativa. Caso o usuário digite um código que não esteja na tabela, informar que o código inserido
//está errado.

let peso = 90;
let planeta = 2;

switch (planeta) {
  case 1:
    console.log(`Seu peso em Mercúrio é ${((peso) * 0.37).toFixed(2)}kg`);
    break;
  case 2:
    console.log(`Seu peso em Vênus é ${((peso) * 0.88).toFixed(2)}kg`);
    break;
  case 3:
    console.log(`Seu peso em Marte é ${((peso) * 0.38).toFixed(2)}kg`);
    break;
  case 4:
    console.log(`Seu peso em Júpiter é ${((peso) * 2.64).toFixed(2)}kg`);
    break;
  case 5:
    console.log(`Seu peso em Saturno é ${((peso) * 1.15).toFixed(2)}kg`);
    break;
  case 6:
    console.log(`Seu peso em Urano é ${((peso) * 1.17).toFixed(2)}kg`);
    break;
  default:
    console.log(`Código inserido inválido.`);
}
