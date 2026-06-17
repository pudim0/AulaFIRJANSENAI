//Desenvolver um programa que pergunte a sigla do estado onde a pessoa reside, e apresente uma das seguintes
//alternativas como resposta: Carioca, Paulista, Mineiro, Outros Estados.

let estado = "SP";

switch (estado) {
  case "RJ":
    console.log("Pega a visão, você é carioca pra caralho, papo reto");
    break;
  case "SP":
    console.log("Mano do céu, se pá tu é Paulista");
    break;
  case "MG":
    console.log("Nu, ocê é um mineiro bão");
    break;
  case "ES":
    console.log("Você existe????????????");
    break;
  default:
    console.log("Cacete, é pra selecionar os estados so Sudeste");
    break;
}
