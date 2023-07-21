import PromptSync from 'prompt-sync';

let prompt = PromptSync();

/* 1.  utilizando o loop for */

export function imprimirDe1a10() {
    let numero;

    console.log("Imprimir números de 1 a 10");

    for (let index = 1; index <= 10; index++) {

        const numero = index;
        console.log("O número é: " + numero);

    }
}
