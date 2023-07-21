import PromptSync from 'prompt-sync';

const prompt = PromptSync();

/* 8. Faça um programa que receba a idade do usuário, enquanto a
resposta do usuário for menor que 18 anos continue a solicitar a
idade e mostre uma mensagem quando a idade do usuário for
maior que 18. */

export function verificarMaiorIdade() {
    
    /* console.log("Faça um programa que receba nome e a idade do usuário, enquanto aresposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.");
     */
    let pessoa ={
        nome: "",
        idade: 0,
    }

    do {

        pessoa.nome = prompt("digite seu nome: ")
        pessoa.idade = prompt("digite uma idade: ");

    } while (pessoa.idade < 18);

    console.log("idade valida");
    console.log(pessoa.nome + " você tem: " + pessoa.idade + "anos e já é maior de idade!");
}

