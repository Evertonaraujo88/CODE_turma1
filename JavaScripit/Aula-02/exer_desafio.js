const prompt = require('prompt-sync')();
/* Exercício Desafio que coloque a disposição do usuário qual exericio ele deseja executar */
let escolha;

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

    escolha = parseInt(prompt("Digite qual exercicio deseja executar: "));

    switch (escolha) {
        case 1:
            let numero;

            for (let index = 1; index <= 10; index++) {

                const numero = index;
                console.log("O número é: " + numero);

            }
            break;

        case 2:

            let numeroex2;

            for (let index = 2; index <= 10; index += 2) {

                const numeroex2 = index;
                console.log("O número é: " + numeroex2);
            }
            break;

        case 3:
            let numeroex3;

            for (let index = 1; index <= 50; index += 2) {

                const numeroex3 = index;
                console.log("O número é: " + numeroex3);

            }
            break;

        case 4:
            let numeroex4 = parseInt(prompt("Digite um número que deseja saber a tabuada: "));

            let tabuada;

            for (let index = 1; index <= 10; index++) {

                tabuada = (numeroex4 * index);

                console.log(+ numeroex4 + "x" + index + "=" + tabuada);

            }
            break;

        case 5:
            let num1 = 0;
            let num2 = 1;
            let auxiliar;

            for (var i = 0; i < 10; i++) {
                auxiliar = num1;
                num1 = num2;
                num2 = num1 + auxiliar;

                console.log(num2);

            }
            break;

        case 6:
            let numeroex6 = 0;

            while (numeroex6 <= 20) {

                console.log(numeroex6);

                numeroex6 += 2;


            }
            console.log("encerrado");
            break;

        case 7:
            let resultado = 0;
            let contador = 1;

            while (contador <= 100) {
                resultado = resultado + contador;

                contador++
                console.log(resultado);
            }

            break;

        case 8:
            let idade;

            do {

                idade = prompt("digite uma idade: ");

            } while (idade < 18);

            console.log("pode prosseguir, é maior de idade!");
            break;

        case 9:
            let numeroex9;
            numeroex9 = parseInt(prompt("Digite um número: "));

            while (numeroex9 != 0) {

                console.log(numeroex9);
                numeroex9--;

            }
            break;

        case 10:
            let numeroex10;

            do {

                numeroex10 = parseInt(prompt("Digite um numero: "));


            } while (numeroex10 != 0);
            break;

        default:
            break;
    }
} while (escolha > 10);