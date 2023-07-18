let prompt = require('prompt-sync')()

/* Exercício 3: 
Verificação de números em ordem crescente
Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não. */

let num1 = parseInt(prompt('Digite um número: '));

let num2 = parseInt(prompt('Digite um número: '));

let num3 = parseInt(prompt('Digite um número: '));

if (num1 < num2) {
    
    if (num2 < num3) {

        console.log("Os numeros estão em ordem crescente")
    }
}else if (num1 > num2) {
    if (num2 > num3) {

        console.log("Os numeros estão em ordem Decrescente")
    }
}