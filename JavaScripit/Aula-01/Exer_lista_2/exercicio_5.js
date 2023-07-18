let prompt = require('prompt-sync')()

/* Exercício 5: 
Cálculo de desconto progressivo
Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
aplique um desconto de acordo com o valor total da compra. Siga a tabela:
Valor total da compra até R$ 100,00: sem desconto.
Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
Valor total da compra acima de R$ 200,00: desconto de 20%.
Exiba o valor final da compra com o desconto aplicado. */

let valorDaCompra = parseFloat(prompt("Digite o valor total da compra: "));

if (valorDaCompra <=100) {
    console.log("compra sem desconto!");
} else { if 
    (valorDaCompra > 100.01 && valorDaCompra <= 200) 
    {
       console.log("deconto de 10%, valor total a pagar: R$"+ (valorDaCompra * 0.90)); 
    } else if (valorDaCompra >= 201,01) {
        console.log("desconto de 20%, valor total a pagar: R$" + (valorDaCompra * 0.80));
    } 
    
}