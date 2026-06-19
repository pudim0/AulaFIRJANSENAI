/*4) Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer. Ela deve ser
impressa no seguinte formato:
Considerando como exemplo o fornecimento do número 2
2 . 1 = 2
2 . 2 = 4
2 . 3 = 6
2 . 4 = 8
2 . 5 = 10
(...)
2 . 10 = 20*/

multiplicando = 2;
multiplicador = 0;

while (multiplicador <= 10) {
  multiplicador++;
  console.log(
    `${multiplicando} * ${multiplicador} = ${multiplicando * multiplicador}`,
  );
}
