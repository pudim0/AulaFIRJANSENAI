// Crie uma classe Carro com as seguintes propriedades:

// marca: string
// modelo: string
// ano: number
// cor: string
// velocidadeAtual: number
// Métodos

// Implemente os seguintes métodos:

// acelerar(valor: number): void
// Aumenta a velocidade atual.
// frear(valor: number): void
// Diminui a velocidade atual.
// A velocidade nunca pode ficar negativa.
// identificar(): void
// Exibe todas as características do carro.
// classificar(): string
// Retorna:
// "Carro Antigo" se o ano for menor que 2000.
// "Carro Moderno" se o ano estiver entre 2000 e 2020.
// "Carro Novo" se o ano for maior que 2020.

class Carro {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  velocidadeAtual: number;
  historico: string[] = [];
  constructor(marca: string, modelo: string, ano: number, cor: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.velocidadeAtual = 0;
  }
  acelerar(valor: number): void {
    this.velocidadeAtual += valor;
    this.historico.push(`Acelerou ${valor} km/h`);
  }
  frear(valor: number): void { // não cria a variável
    const velocidadeAnterior = this.velocidadeAtual; // só cria se vc pedir com void, se não, não cria
    this.velocidadeAtual -= valor;
    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
    }
    this.historico.push(
      `Freou ${velocidadeAnterior - this.velocidadeAtual} km/h`,
    );
  }
  classificar(): string { //let classificacao: string;
    if (this.ano < 2000) {
      return "Carro Antigo\n";
    } else if (this.ano <= 2020) {
      return "Carro Moderno\n";
    } else {
      return "Carro Novo\n";
    }
  }
  identificar(): void {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Velocidade Atual: ${this.velocidadeAtual}km/h`);
    console.log(`classificação: ${this.classificar()}`);
  }
  exibirHistorico(): void {
    console.log(
      `Histórico de Acelerações ou Freios do carro ${this.marca} ${this.modelo}:`,
    );
    this.historico.forEach((acao) => console.log(`- ${acao}`));
    console.log(`--------------------------------`);
  }
}

let carro1 = new Carro("Toyota", "Corolla", 2015, "Prata");
carro1.acelerar(100);
carro1.frear(30);
carro1.identificar();
carro1.classificar();
carro1.exibirHistorico();

let carro2 = new Carro("Volkswagen", "Gol", 1998, "Branco");
carro2.acelerar(80);
carro2.frear(100);
carro2.identificar();
carro2.classificar();
carro2.exibirHistorico();

let carro3 = new Carro("Honda", "Civic", 2015, "Preto");
carro3.acelerar(120);
carro3.frear(50);
carro3.identificar();
carro3.classificar();
carro3.exibirHistorico();
