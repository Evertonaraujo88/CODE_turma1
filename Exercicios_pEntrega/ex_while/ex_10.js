import PromptSync from 'prompt-sync';
let prompt = PromptSync();

/* 10. Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0. */

export function repetirSeDef0() {
    let numero;

    do {

        numero = parseInt(prompt("Digite um numero: "));


    } while (numero != 0);
}
