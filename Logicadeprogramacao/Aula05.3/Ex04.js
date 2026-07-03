/*4) Desenvolver um programa que pergunte um número inteiro e exiba os números que são, ao mesmo tempo,
múltiplos de 3 e 5, na sequência de 1 até o número informado pelo usuário.*/

let i = 0

for(let n = 502; i<=n; i+=1){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i)
    }
}
    