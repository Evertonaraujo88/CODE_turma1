let prompt = require('prompt-sync')();

// EXERCICIO 1

// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let nome = prompt("Informe o nome do profissional:")
let cargo = prompt("Informe o cargo do profissional:")
let salario = parseFloat (prompt("Informe o salário do profissional:"))

let salarioResult = (salario * 0.10)+(salario);

if (salario <= 1000) {
    console.log(`Profissional: ${nome}`)
    console.log(`Cargo: ${cargo}`)
    console.log(`Foi acrescentado ao seu salário 10%, seu novo salário é de: ${salarioResult}`)
} else {
    console.log(`Profissional: ${nome}`)
    console.log(`Cargo: ${cargo}`)
    console.log(`seu salário é de: ${salario}`)
}
    