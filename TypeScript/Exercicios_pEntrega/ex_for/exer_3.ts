import PromptSync from 'prompt-sync';
const prompt = PromptSync();

/* 3. Faça um programa que imprima os números ímpares de 0 a 50; */
export function imprimirNumImpar0a50() {
    let numero: number;

    for (let index = 1; index <= 50; index += 2) {

        const numero = index;
        console.log("O número é: " + numero);

    }
}
