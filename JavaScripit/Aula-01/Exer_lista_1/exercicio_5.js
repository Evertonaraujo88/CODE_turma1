let prompt = require('prompt-sync')();

// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let num1 = parseFloat(prompt("Informe o primeiro número:"))
let num2 = parseFloat(prompt("Informe o segundo número:"))

if (num1 > num2) {
    console.log(`O ${num1} é maior que o ${num2}`)
} else if (num1 == num2) {
    console.log(`O ${num1} é igual ao ${num2}`)
}
else {
    console.log(`O ${num2} é maior que o ${num1}`)
}