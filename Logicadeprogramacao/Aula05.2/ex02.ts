let i: number = 0
let soma: number = 0

do {
  if (i % 2 == 0) {
    soma = i + soma;
  }
  i++;
} while (i <= 500);

console.log(soma);
