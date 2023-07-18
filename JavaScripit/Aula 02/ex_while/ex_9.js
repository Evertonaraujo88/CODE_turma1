const prompt = require('prompt-sync')();

/* 9. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */

let numero;
numero = parseInt (prompt("Digite um número: "));

while (numero != 0) {
        
    console.log(numero);
    numero --;

}
