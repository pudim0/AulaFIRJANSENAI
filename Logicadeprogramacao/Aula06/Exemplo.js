//for clássico
let numero = [10, 25, 37, 42, 58];
for (let i = 0; i < numero.length; i++) {
  console.log("Índice " + i + "; " + numero[i]);
}

//for... of
for (let num of numero) {
  console.log(num);
}

//forEach
numero.forEach((num, i) => {
  console.log(`Posição ${i}: ${num}`);
});
