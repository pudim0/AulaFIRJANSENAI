// Desenvolver um programa que leia 5 nomes de pessoas e armazene no vetor nomes. Em seguida o programa
// deve informar que enquanto o usuário responder SIM, será pedido que ele digite um nome e o programa
// informará se este nome existe ou não no vetor nomes. Em resumo, o programa deverá fazer o seguinte:
// • Perguntar se o usuário quer fazer uma pesquisa de nomes no vetor nomes.
// • Se a resposta for SIM, perguntar qual o nome.
// • Informar se o nome existe ou não no vetor nomes.

let nomes = ["Rodinei", "João", "Maria", "Cabral", "Ribamar"];
let op = "sim".toUpperCase();
let nome;
let mudaOP = 1;

while (op == "sim".toUpperCase()) {
  nome = "Rodinei";
  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
      console.log("Nome existe no vetor");
    }
  }
  mudaOP++;
  if (mudaOP == 3) {
    op = "não".toUpperCase();
  }
}
