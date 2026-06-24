// // Calcular desconto - produto 1
// let preco1 = 100;
// let desconto1 = preco1 * 0.1;
// let final1 = preco1 - desconto1;
// console.log(final1);

// // Calcular desconto - produto 2
// let preco2 = 250;
// let desconto2 = preco2 * 0.1;
// let final2 = preco2 - desconto2;
// console.log(final2);
// Refatorando o código acima para criar uma função que calcula o desconto
function calcularDesconto(preco) {
    let desconto = preco * 0.1;
    let final = preco - desconto;
    return final;
}

let preco1 = 100
let preco2 = 250

console.log(calcularDesconto(preco1));
console.log(calcularDesconto(preco2));