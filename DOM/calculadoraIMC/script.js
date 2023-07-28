/* algoritmo 
Calcular IMC:
1- pegar os valores digitados
2- efetuar os calculos do imc
3- gerar a classificação do IMC
4- Organizar as informações
5- Salvar os dados na lista
6- Ler a lista com os dados
7- Renderizr o conteúdo no HTML
8- Botão de limpar os registros*/

function calcularImc(event) {
    //evento faz para de carregar a tela
    event.preventDefault();

    console.log("Funcionante!!!");


    let dadosUsuario = pegarValores();

    let imc = calcular(dadosUsuario.altura, dadosUsuario.peso);

    /* console.log(classificarImc(imc)); */

    let classificacaoImc = classificarImc(imc);

    let usuarioAtualizado = organizarDados(dadosUsuario, imc, classificacaoImc);

    cadastrarUsuario(usuarioAtualizado);


}

//Passo 1- pegar os valores digitados
function pegarValores() {

    let nomeDigitado = document.getElementById("nome").value.trim(); //trim - corta espaco vazio no começo ou no final da entrada digitada

    let alturaDigitada = parseFloat(document.getElementById("altura").value);

    let pesoDigitado = parseFloat(document.getElementById("peso").value);

    let dadosUsuario = {

        nome: nomeDigitado,
        altura: alturaDigitada,
        peso: pesoDigitado
    }

    console.log(dadosUsuario);

    return dadosUsuario;
}

//2- efetuar os calculos do imc

function calcular(altura, peso) {

    let imc = (peso / (altura * altura)).toFixed(2);

    console.log(imc);

    return imc;
}

//3- gerar a classificação do IMC
function classificarImc(imc) {
    /* resultado            situacao
    abaixo de 18,5          Filezinho
    entre 18,5 e 24,99      DIliça!!!
    entre 25 e 29,99        Ta top!!!
    acima de 30             Oh la em casa!!    
    */

    if (imc < 18.5) {
        return "Filezinho";

    } else if (imc <= 24.99) {

        return "DIliça!!!";

    } else if (imc <= 29.99) {

        return "Ta top!!!";

    } else if (imc >= 30) {

        return "Oh la em casa!!";
    }
}

//4- Organizar as informações

function organizarDados(dadosUsuario, valorImc, classificarImc) {

    let dataHoraatual = Intl.DateTimeFormat('pt-BR', { timeStyle: "long", dateStyle: "short" }).format(Date.now());

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        imc: valorImc,
        classificacao: classificarImc,
        dataCadastro: dataHoraatual

    }
    console.log(dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado;

}

//5- Salvar os dados na lista
function cadastrarUsuario(usuario) {

    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {

        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuarios.push(usuario)

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios)) //pegando a lista usuario e tranformando em string
}

//5- Salvar os dados na lista
function carregarUsuarios() {

    let listaUsuarios = [];

    //nesse if vai no localstorage e tenta pegar o elemento, e existir converte ele e salva na lista
    if (localStorage.getItem("usuariosCadastrados")) {

        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    //nesse if verifica o tamanho do array "lista"
    if (listaUsuarios.lenght == 0) {

        let tabela = document.getElementById("corpo-tabela");

        //comando innerHTML inseri html na tebela
        /* < comando colspan reserva o espaço de colunas conforme "" na tabela */
        tabela.innerHTML =
            `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuário cadastrado!</td>
        </tr>`

    } else {
        montarTabela(listaUsuarios);
    }

}

//esse comando ira carregar a lista assim que o usuario entrar na pagina
window.addEventListener('DOMContentLoaded', () => carregarUsuarios());


//7- Renderizr o conteúdo no HTML
function montarTabela(listaDeCadastrados) {

    let tabela = document.getElementById("corpo-tabela");

    let template = '';

    listaDeCadastrados.forEach(pessoa => {

        template += `<tr>
            <td data-cell="nome">${pessoa.nome}</td>
            <td data-cell="altura">${pessoa.altura}</td>
            <td data-cell="peso">${pessoa.peso}</td>
            <td data-cell="valor do IMC">${pessoa.imc}</td>
            <td data-cell="classificação do IMC">${pessoa.classificacao}</td>
            <td data-cell="data de cadastro">${pessoa.dataCadastro}</td>
        </tr>`

    });

    tabela.innerHTML = template;

}

//8- Botão de limpar os registros*/
function deletarRegistros() {
    localStorage.removeItem("usuariosCadastrados")
    
    //esse codigo vai recarregar a tela apos remover os itens
    window.location.reload();
}

