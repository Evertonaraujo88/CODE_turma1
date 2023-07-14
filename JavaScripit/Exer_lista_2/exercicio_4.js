let prompt = require('prompt-sync')()

/* Exercício 4: 
Verificação de idade
Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

let ano = parseInt(prompt('Digite seu ano de nascimento com 4 digitos: '));


let idade = (2023 - ano);

if (idade >= 18) {
    console.log("você é maior de idade tem " + idade ,"anos.");
} else {
    console.log("Você ainda é menor de idade.")
}