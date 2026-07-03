class Pedido {
  numero: number;
  cliente: string;
  valor: number;
  entregue: boolean;

  constructor(
    numero: number,
    cliente: string,
    valor: number,
    entregue: boolean
  ) {
    this.numero = numero;
    this.cliente = cliente;
    this.valor = valor;
    this.entregue = entregue;
  }
}

const pedidos: Pedido[] = [
  new Pedido(1, "Rodinei", 29.99, false),
  new Pedido(2, "Marco Antônio", 23.9, true),
  new Pedido(3, "Cleópatra", 100.99, true),
  new Pedido(10, "Erling Haaland", 1000000.0, false),
  new Pedido(81, "Bernardo Silva", 99.0, false),
  new Pedido(1000, "Gio Lisboa", 75.51, false),
  new Pedido(6, "Getúlio Vargas", 89.99, true),
  new Pedido(666, "Marília Mendonça", 0.0, true),
];

function calcularTotal(lista: Pedido[]): number {
  let total = 0;

  for (const pedido of lista) {
    total += pedido.valor;
  }

  return total;
}

let entregues = 0;

console.log("===== Situação dos Pedidos =====");

for (const pedido of pedidos) {
  console.log(`Pedido ${pedido.numero} - ${pedido.cliente}`);

  if (pedido.entregue) {
    console.log("Pedido entregue");
    entregues++;
  } else {
    console.log("Pedido pendente");
  }

  console.log("----------------------------");
}

let pendentes = 0;
let i = 0;

while (i < pedidos.length) {
  if (!pedidos[i].entregue) {
    pendentes++;
  }
  i++;
}

const totalVendas = calcularTotal(pedidos);
const ticketMedio = totalVendas / pedidos.length;

console.log("\n===== Resumo =====");
console.log(`Valor total vendido: R$ ${totalVendas.toFixed(2)}`);
console.log(`Pedidos entregues: ${entregues}`);
console.log(`Pedidos pendentes: ${pendentes}`);
console.log(`Ticket médio: R$ ${ticketMedio.toFixed(2)}`);