import PromptSync from 'prompt-sync';
const prompt = PromptSync();

/* 2. Imprimir números pares de 1 a 10. */
export function imprimirNumParde1a10() {

    let numero;

    for (let index = 2; index <= 10; index += 2) {

        numero = index;
        console.log("O número é: " + numero);

    }
}

