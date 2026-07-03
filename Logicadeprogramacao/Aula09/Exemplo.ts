class ContaBancaria {
  titular: string;
  saldo: number;
  historico: string[] = [];
  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }
  sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      this.historico.push(
        `\n${this.titular} sacou ${valor}. Saldo atual: ${this.saldo}`,
      );
    } else {
      this.historico.push(
        `\n${this.titular} não possui saldo suficiente para sacar ${valor}. Saldo atual: ${this.saldo}`,
      );
    }
  }
  depositar(valor: number): void {
    this.saldo += valor;
    this.historico.push(
      `\n${this.titular} depositou ${valor}. Saldo atual: ${this.saldo}`,
    );
  }
  exibirSaldo(): void {
    console.log(`\n${this.titular} possui saldo de: ${this.saldo}`);
  }
  exibirHistorico(): void {
    console.log(`Histórico de transações de ${this.titular}:`);
    for (const transacao of this.historico) {
      console.log(transacao);
    }
  }
}

let conta1 = new ContaBancaria("João", 1000);

conta1.exibirSaldo();
conta1.sacar(200);
conta1.exibirSaldo();
conta1.sacar(2000);
conta1.exibirHistorico();

let conta2 = new ContaBancaria("Maria", 2000);
conta2.exibirSaldo();
conta2.depositar(1000);
conta2.exibirSaldo();
