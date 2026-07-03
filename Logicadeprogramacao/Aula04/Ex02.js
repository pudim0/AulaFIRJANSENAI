//Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
//com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.

let sexo = "masculino".toLowerCase(); //Converte toda a string em caixa baixa, se fosse toUpperCase() seria toda a string em caixa alta

switch (sexo) {
  case "feminino":
    console.log("Banheiro feminino à direita");
    break;
  case "masculino":
    console.log("Banheiro masculino à direita");
    break;
  case "neutro":
    console.log("Não temos banheiro neutro");
    break;
  default:
    console.log("Digite o sexo a que você se identifica:");
}
