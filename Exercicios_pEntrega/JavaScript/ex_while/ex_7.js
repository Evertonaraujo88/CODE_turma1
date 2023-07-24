import PromptSync from 'prompt-sync';
let prompt = PromptSync();

/* 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
while. */

/* let num2 = 1;
let soma =0;

do{

soma = soma + num2;

console.log(soma);

num2 ++

}while (soma < 100 ); */

export function somaDe1a100() {
    let resultado = 0;
    let contador = 1;

    while (contador <= 100) {
        resultado = resultado + contador;

        contador++
        console.log(resultado);
    }
}

