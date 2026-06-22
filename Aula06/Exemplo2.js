/*EXEMPLO:
let matriz = [
  [1, 2],
  [3, 4],
];*/

//matriz [i, j], i = linha, j = coluna
let matriz = [
  [1, 2, 10],
  [3, 4, 5],
  [49, 12, 41],
];

console.log(matriz[0][0]); //1
console.log(matriz[0][1]); //2
console.log(matriz[1][0]); //3
console.log(matriz[1][0]); //4

//Percorrendo a matriz com loops alinhados
// Um for para linha e um para coluna, respectivamente
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`[${i}][${j}] = ${matriz[i][j]}`);
  }
}
