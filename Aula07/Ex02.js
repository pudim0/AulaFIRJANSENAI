// Questão 2: Análise de Vendas Multidimensional
// Neste exercício, você deve aplicar o conceito de matriz (array de arrays), que é uma estrutura bidimensional organizada em linhas e colunas, como uma tabela
// O Desafio: Desenvolva um sistema para uma loja que venda 3 tipos de produtos. O sistema deve processar as vendas desses produtos ao longo de 4 semanas.
// Requisitos Técnicos:
// Estrutura de Dados: Crie um objeto chamado relatorio que contenha:
// vendedor: Uma string com o nome do vendedor.
// vendas: Uma matriz 3x4 (3 linhas representando os produtos e 4 colunas representando as semanas do mês) contendo valores numéricos
// Cálculos (Acumuladores):
// Calcule a soma total de vendas por produto (soma de cada linha)
// Calcule o total geral de vendas do mês (soma de todos os elementos da matriz) utilizando uma variável acumuladora
// Saída: Exiba no console o nome do vendedor, o total de cada produto e o faturamento total da loja.

function vendasaleatorias() {
  return Math.floor(Math.random() * (1800 - 300) + 300);
}
let totalGeral = 0;
let relatorio = [
  {
    vendedor: "Joao",
    produtos: [["Notebook", "Mouse", "Teclado"]],
    vendas: [
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // notebook
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // mouse
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // teclado
    ],
  },
  {
    vendedor: "Rodinei",
    produtos: [["Notebook", "Mouse", "Teclado"]],
    vendas: [
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // notebook
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // mouse
      [
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
        vendasaleatorias(),
      ], // teclado,
    ],
  },
];

for (const vendedor of relatorio) {
  let tabela = [];

  totalVendedor = 0;
  console.log("-------------------------");
  console.log(`Vendedor: ${vendedor.vendedor}`);
  for (let i = 0; i < vendedor.vendas.length; i++) {
      let totalProduto = 0;

    for (let j = 0; j < vendedor.vendas[i].length; j++) {
      totalProduto += vendedor.vendas[i][j];
      totalGeral += vendedor.vendas[i][j];
      totalVendedor += vendedor.vendas[i][j];
    }

    console.log(` ${vendedor.produtos[0][i]}: R$ ${totalProduto.toFixed(2)}`);
  }
  console.log(
    `Total de vendas do vendedor ${vendedor.vendedor}: R$ ${totalVendedor.toFixed(2)}`,
  );

  for (let i = 0; i < vendedor.vendas.length; i++) {
    tabela.push({
      Produto: vendedor.produtos[0][i],
      Semana1: vendedor.vendas[i][0],
      Semana2: vendedor.vendas[i][1],
      Semana3: vendedor.vendas[i][2],
      Semana4: vendedor.vendas[i][3],
      TotalDoProduto:
        vendedor.vendas[i][0] +
        vendedor.vendas[i][1] +
        vendedor.vendas[i][2] +
        vendedor.vendas[i][3],
    });
  }
  console.table(tabela);
}
console.log("-------------------------");
console.log(`Faturamento total da loja: R$ ${totalGeral.toFixed(2)}`);
