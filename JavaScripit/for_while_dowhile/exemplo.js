



/* let nomes = ["everton", "Lucas", "Cosme", "Stefany", "Kauan"]; {
    
    //                          ao inves de usar tamanho certo a percorrer, usar array.length
  /*   for (let index = 0; index < nomes.length; index++) {
        const posicao = nomes[index];

        console.log("o nome é: "+ posicao);
        
    } */

    //                    => significa aronfunction
   /*  nomes.forEach((cadaElemento, posicao) => {
        console.log("o nome é:" + posicao , cadaElemento);
    }); 
}*/

/* const frutas = ["pera","uva","maça","salada mista"];{

    /* for (let contador = 0; contador < frutas.length; contador++) {
        const cadaelemento = frutas[contador];
        console.log(contador, cadaelemento);
    } */

    /* frutas.forEach((i , cadaElemento) => {
        console.log(i, cadaElemento);
    });
} */

// WHILE //
/* 
let salario = 1000;

let contador = 0; */

/* while (salario < 5000) {

    salario += 100;

    console.log("seu salario ainda eh:" + salario);
    
} */

/* do {
     salario += 100;
     contador ++;
     console.log("seu salario ainda eh: "+ salario);
} while (salario <=5000);

    console.log(contador); */


   /*  let numeroEscolhido = "5";

    do {

        numeroEscolhido = prompt("digite um numero: ");


    } while (numeroEscolhido != "5"); */
    const PromptSync = require('prompt-sync')()
    
    let senha;

    do {

        senha = prompt("Digite sua senha: ")

        if (senha != "123") {
         console.log('senha invalida!');   
        }
        

    } while (senha != "123");