let prompt = require('prompt-sync')();

// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let numero = parseInt(prompt("Informe o número que deseja saber se é positivo ou negativo:"))

if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
}else {
    console.log("Digite um número válido!")
}