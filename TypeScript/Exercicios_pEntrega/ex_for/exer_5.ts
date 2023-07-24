import PromptSync from 'prompt-sync';
let prompt = PromptSync();

/* 5. Imprimir os primeiros 10 números da sequência de Fibonacci. */
export function fibonacci() {
   let num1: number = 0;
   let num2: number = 1;
   let auxiliar: number;

   for (var i = 0; i < 10; i++) {
      auxiliar = num1;
      num1 = num2;
      num2 = num1 + auxiliar;

      console.log(num2);


   }
}

