import PromptSync from 'prompt-sync';
let prompt = PromptSync();

/* 4. Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10. */
export function tabuada() {

    let numero = parseInt(prompt("Digite um número que deseja saber a tabuada: "));

    let tabuada;

    for (let index = 1; index <= 10; index++) {

        tabuada = (numero * index);

        console.log(+ numero + "x" + index + "=" + tabuada);

    }
}

