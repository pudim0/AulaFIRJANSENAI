// Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
// de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
// das 5 pessoas cadastradas.

let nome = ["Ederson", "Neymar", "Raphinha", "Casemiro", "Danilo"]
let profissao = ["ProfSubstituto", "Fisioterapeuta", "Pedreiro", "Gordo", "Coach"]

nome.forEach((nome, i) => {
    console.log(`${nome[i]} : ${profissao[i]}`)
})