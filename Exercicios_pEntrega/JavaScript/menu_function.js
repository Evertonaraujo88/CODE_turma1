import PromptSync from "prompt-sync";

import { imprimirDe1a10 } from "./ex_for/exer_1.js";
import { imprimirNumParde1a10 } from "./ex_for/exer_2.js";
import { imprimirNumImpar0a50 } from "./ex_for/exer_3.js";
import { tabuada } from "./ex_for/exer_4.js";
import { fibonacci } from "./ex_for/exer_5.js";
import { imprimirPar0a20 } from "./ex_while/ex_6.js";
import { somaDe1a100 } from "./ex_while/ex_7.js";
import { verificarMaiorIdade } from "./ex_while/ex_8.js";
import { regressiva } from "./ex_while/ex_9.js";
import { repetirSeDef0 } from "./ex_while/ex_10.js";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    console.log(`
    Menu de exercicios:

    1- Imprimir números de 1 a 10
    2- Imprimir números pares de 1 a 10
    3- Imprimir os números ímpares de 0 a 50
    4- Imprimir na tela a tabuada que desejar
    5- Imprimir os primeiros 10 números da sequência de Fibonacci
    6- Imprimir números pares de 0 a 20
    7- Calcular a soma dos números de 1 a 100
    8- Receber idade e se usuário for menor informar
    9- receba um número do usuário e mostre no console a contagem regressiva até 0.
    10- receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

    `);

    exercicio = parseInt(prompt("Digite qual exercicio deseja executar: "));

    switch (exercicio) {
        case 1:
            imprimirDe1a10();
            break;

        case 2:

            imprimirNumParde1a10();
            break;

        case 3:
            
            imprimirNumImpar0a50();
            break;

        case 4:

            tabuada();
            break;

        case 5:

            fibonacci();
            break;
        
        case 6:

            imprimirPar0a20();
            break;
        
        case 7:

            somaDe1a100();
            break;

        case 8:

            verificarMaiorIdade();
            break;

        case 9:

            regressiva();
            break;

        case 10:

            repetirSeDef0()
            break;
            
        default:
            console.log("Digite um numero de 1 a 10");
            break;
    }

    continuar = prompt( "\nDeseja continuar ver outros exercicios? Digite s para sim ou n para nao: " ).toLocaleLowerCase();

} while (continuar === "s" );
