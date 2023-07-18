let prompt = require('prompt-sync')();

// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let salario = parseFloat (prompt("Informe o salário do profissional:"))

let salarioResult = (salario * 0.30)+(salario);
if (salario < 500) {
    console.log(`Foi acrescentado um aumento de 30% ao seu salário, seu novo salário é de ${salarioResult}`)
} else {
    console.log(`Você não tem direito a aumento, seu salário é de ${salario}`)
}