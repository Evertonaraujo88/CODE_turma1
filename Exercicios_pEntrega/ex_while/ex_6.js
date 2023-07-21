import PromptSync from 'prompt-sync';
let prompt = PromptSync();

/* 6. Imprimir números pares de 0 a 20 utilizando o loop while */

export function imprimirPar0a20() {
    let numero = 0;


    while (numero <= 20) {

        console.log(numero);

        numero += 2;


    }
    console.log("encerrado");
}
