// 2) Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
// elementos deste vetor.

let a = [15, 30, 45, 60, 75]
let soma = 0

for (let num of a){
    soma+= num;
}
console.log(soma)
