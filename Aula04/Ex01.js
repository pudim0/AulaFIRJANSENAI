//1) Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
//como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
//menu de opções.
//Código Opção
//1 Incluir
//2 Alterar
//3 Excluir
//4 Pesquisar
//5 Sair

let opcao = 1;

switch (opcao) {
  case 1:
    console.log(`Você escolheu "Incluir"`);
    break;
  case 2:
    console.log(`Você escolheu "Alterar"`);
    break;
  case 3:
    console.log(`Você escolheu "Excluir"`);
    break;
  case 4:
    console.log(`Você escolheu "Pesquisar"`);
    break;
  case 5:
    console.log(`Você escolheu "Sair"`);
    break;
  default:
    console.log(`O número digitado não existe no menu de opções`);
}
