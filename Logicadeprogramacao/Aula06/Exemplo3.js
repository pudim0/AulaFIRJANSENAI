let turma = ["Ana", "Bruno", "Carlos"];
console.log("Turma inicial:", turma);

turma.push("Diana");
console.log("Após push:", turma);
//Diana adicionada

let removido = turma.pop();
console.log("Removido:", removido);
console.log("Após pop:", turma);
//Diana removida

turma.unshift("Zélia");
console.log("Após unshift:", turma);
//Zélia entrou

turma.shift();
console.log("Após shift:", turma);
// Zélia saiu

turma.sort();
console.log("Turma em ordem alfabética:", turma);

turma.forEach((turm, i) => {
  console.log(`${i + 1}: ${turm}`);
});


//splice(0, 2); remove a partir do elemento 0, 2 elementos.
turma.splice(0, 2)
console.log(turma)