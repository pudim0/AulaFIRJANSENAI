class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(
    nome: string, 
    preco: number, 
    quantidade: number) 
    {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  
}

const produtos: Produto[] = [
    new Produto("CPU", 599.99, 4), //1
    new Produto("Fan", 89.99, 100), //2
    new Produto("RTX 3060", 1299.99, 1), //3
    new Produto("Teclado", 89.99, 50), //4
    new Produto("Mouse", 57.75, 30), //5
    new Produto("Placa-mãe", 720.99, 20), //6
    new Produto("Fonte 300W", 199.99, 15), //7
    new Produto("Placa de Rede", 90.99, 20) //8
];
function calcularValorEstoque(produtos: Produto[]): number {
    let valorTotal = 0;

    for (const produto of produtos) {
        valorTotal += produto.preco * produto.quantidade;
    }

    return valorTotal;
}

let restoque = 0

for(let produto of produtos){
    
    if(produto.quantidade<5){
        console.log(`Precisa repor estoque de ${produto.nome}`)
        restoque++
    } console.log(`Estoque de ${produto.nome} está OK`)

}
let valorAlto = 0
let i = 0

let produtoMaisCaro = produtos[0]

for (const produto of produtos) {
    if (produto.preco > produtoMaisCaro.preco) {
        produtoMaisCaro = produto;
    }
}

while(i < produtos.length){
    if(produtos[i].preco > 500){
        valorAlto++
    }
    i++
}

const valorTotal = calcularValorEstoque(produtos)
console.log(`Valor total do estoque: R$${valorTotal}`)
console.log(`Produto com maior valor: ${produtoMaisCaro.nome}`)
console.log(`Quantidade de produtos que precisam ser repostos: ${restoque}`)
