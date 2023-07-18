const prompt = require('prompt-sync')();

/* 10. Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0. */

let numero;

do {

    numero = parseInt(prompt("Digite um numero: "));


} while (numero != 0);