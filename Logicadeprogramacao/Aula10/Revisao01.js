// Uma biblioteca deseja informatizar o controle de empréstimos de livros.
// Cada livro possui:
// • título
// • autor
// • quantidade de exemplares
// • quantidade emprestada
// O sistema deverá informar quais livros ainda podem ser emprestados e gerar algumas estatísticas.
// Todos os dados deverão estar definidos diretamente no código.

class Livro {
  constructor(titulo, autor, exemplares, emprestado) {
    this.titulo = titulo;
    this.autor = autor;
    this.exemplares = exemplares;
    this.emprestado = emprestado;
  }
  quantidadeDisponivel() {
    return this.exemplares - this.emprestado;
  }
}
const livros = [
  new Livro("1984", "George Orwell", 10, 5),
  new Livro("Turma da Mônica", "Maurício de Souza", 18, 18),
  new Livro("Admirável Mundo Novo", "Aldous Huxley", 100, 5),
  new Livro("A Song of Ice and Fire", "George R. R. Martin", 93, 93),
  new Livro("O Hobbit", "J. R. R. Tolkien", 248, 98),
  new Livro("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 18, 12),
];

for (const livro of livros) { // for(let i = 0; i < livros.length; i++)
  console.log(`Livro: ${livro.titulo}`);
  console.log(`Quantidade de Exemplares:${livro.exemplares}`);
  console.log(`Quantidade disponível: ${livro.quantidadeDisponivel()}`);
  if (livro.quantidadeDisponivel() > 0) {
    console.log("Disponível");
  } else {
    console.log(`Livro Indisponível`);
  }
  console.log(`------------------------------------`);
}

let livrosComExemplar = 0;
let i = 0;
while (i < livros.length) {
  if (livros[i].quantidadeDisponivel()) {
    livrosComExemplar++;
  }
  i++;
}

console.log(`Total de livros: ${livros.length}`);
console.log(`Livros disponíveis: ${livrosComExemplar}`);
console.log(`Livros indisponíveis: ${livros.length - livrosComExemplar}`);
