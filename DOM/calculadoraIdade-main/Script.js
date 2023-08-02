/* 1. Pegar os valores
2. Calcular a Idade
      a. Com base no ano
      b. Com mês (EXTRA)
      c. Com dia (EXTRA)

3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
   

4. Organizar o objeto pessoa para salvar na lista
5. Cadastrar a pessoa na lista
6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
7. Renderizar o conteúdo da tabela com as pessoas cadastradas
8. Botão para limpar os registros;
 */

function cacularIdade(event) {
    event.preventDefault();

    let dadosUsuario = pegarValores();

    let ano = calcularAno(dadosUsuario.anoNascimento);
   /*  let mes = calularMes(dadosUsuario.mes);*/
     
    /* console.log(classificarIdade(ano)); */
    let classificacaoIdade = classificarIdade(ano);

    let usuarioAtualizado = organizarDados(dadosUsuario, ano, classificacaoIdade);

    cadastrarUsuario(usuarioAtualizado);


}


//1. Pegar os valores
function pegarValores() {

    let nomeDigitado = document.getElementById('nome').value.trim();

    let diaDigitado = parseInt(document.getElementById('dia-nascimento').value);

    let mesDigitado = parseInt(document.getElementById('mes-nascimento').value);

    let anoDigitado = parseInt(document.getElementById('ano-nascimento').value);

    let dadosUsuario = {

        nome: nomeDigitado,
        dia: diaDigitado,
        mes: mesDigitado,
        anoNascimento: anoDigitado
        
        
    }

    console.log(dadosUsuario);

    return dadosUsuario;
    
}

//2. Calcular a Idade
//   a. Com base no ano
//   b. Com mês (EXTRA)
//   c. Com dia (EXTRA)

function calcularAno( anoNascimento) {
        let now = new Date;
        let idadeAno = now.getFullYear() - anoNascimento;

        
        /* let idadeDia = ((now.getDate()) - dia) + (idadeAno * 365); */
 
        console.log(idadeAno);
   
     /*    console.log(idadeDia); */

        return idadeAno;
        
}

/* function calularMes(mes) {
    let now = new Date;
    let idadeMes = ((now.getMonth()) - mes)+ (calcularAno(ano) * 12);

        console.log(idadeMes);
} */

/* 
    3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
*/
function classificarIdade(idadeAno) {

    if (idadeAno <= 12) {
        return "Criança!"
    } else if (idadeAno <= 17) {
        {
            return "Adolescente!"
        }
    } else if (idadeAno <= 65) {
        {
            return "Adulto"
        }
    } else  if (idadeAno > 65) {
        return "Idoso"
    }
    
}

/* 
    4. Organizar o objeto pessoa para salvar na lista
*/
 function organizarDados(dadosUsuario, idadeAno, classificarIdade ) {

    let dataHoraatual = Intl.DateTimeFormat('pt-BR', { timeStyle: "long", dateStyle: "short" }).format(Date.now());

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        ano : idadeAno,
        classificacaoIdade: classificarIdade,
        dataCadastro: dataHoraatual
    }  
    
    console.log(dadosUsuarioAtualizado);
    return dadosUsuarioAtualizado
 }

 //5. Cadastrar a pessoa na lista
 function cadastrarUsuario(usuario) {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));

    }

     // Acrescenta o usuario recebido a lista
     listaUsuarios.push(usuario);

     localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
    
 }

 

 //6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página

 function carregarUsuarios() {
   
    let listaUsuarios = [];

   
    if (localStorage.getItem("usuariosCadastrados")) {
        
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    
    if (listaUsuarios.length == 0) {
    
        let tabela = document.getElementById("corpo-tabela");

        //Cria uma linha na tabela com a mensagem "Nenhum usuario cadastrado!""
        tabela.innerHTML = `<tr class="linha-mensagem">
        <td colspan="6">Nenhum usuario cadastrado!</td>
    </tr>`

    }else{
        
        montarTabela(listaUsuarios);
    }
}

// Adiciona o evento a janela/navegador que executa a função carregarUsuarios quando o DOM estiver carregado
window.addEventListener('DOMContentLoaded', () => carregarUsuarios());

function montarTabela(listaDeCadastrados) {
   
    let tabela = document.getElementById("corpo-tabela");

    
    let template = '';

    console.log(listaDeCadastrados);

    listaDeCadastrados.forEach(pessoa => {
        // Cria uma linha de tabela mesclando tag html e valor dos atributos do objeto que esta dentro do array
        // E adiciona um bloco de codigo igual o a baixo dentro da variavel template para cada elemento do array
        template += `<tr>
        <td data-cell="nome">${pessoa.nome}</td>
        <td data-cell="data de nascimento">${(pessoa.dia)+ "/"+ (pessoa.mes)+"/"+(pessoa.ano)}</td>
        <td data-cell="idade">${pessoa.ano}</td>
        <td data-cell="faixa etária">${pessoa.classificacaoIdade}</td>
    </tr>        `
    });

    // Adiciona o conteudo que esta dentro da variavel template ao elemento tabela
    tabela.innerHTML = template;
}

//8. Botão para limpar os registros;
function deletarRegistros() {
    
    localStorage.removeItem("usuariosCadastrados");

  
    window.location.reload();

}