import java.lang.reflect.Array;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        ArrayList<Livro> listaLivros = new ArrayList<>();
        Livro metodoLivro = new Livro();

        System.out.println("Bem vindo ao Sebo!!!!!");
        System.out.println();

        Scanner leitor = new Scanner(System.in);

        String opcao;

        do {

            System.out.println("" +
                    "Digite uma opção: " +
                    "1-Cadastrar lIVRO" +
                    "2-Listar lIVRO" +
                    "0-Sair");
            opcao = leitor.nextLine();
            System.out.println();

            switch (opcao){


                case"1":
                    Livro novoLivro = new Livro();
                    novoLivro.autor = new Autor();

                    System.out.println("Digite o Título do livro:");
                    novoLivro.titulo = leitor.nextLine();

                    System.out.println("Digite o preço do livro:");
                    novoLivro.preco = leitor.nextFloat();

                    System.out.println("Digite a data de lançamento do livro: ex (dd/mm/aaaa)");
                    novoLivro.dataLancamento = LocalDate.parse(leitor.next(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

                    Period tempolanc = Period.between(novoLivro.dataLancamento, LocalDate.now());

                    if (tempolanc.getYears() > 5) {
                        System.out.println("Tempo de lançamento válido para continuar o cadastro!!");
                        System.out.println();
                    } else {
                        System.out.println("Esse livro não atende o tempo mínimo de 5 anos de lançamento.");
                        break;
                    }

                    System.out.println("Digite o autor do livro:");
                    novoLivro.autor.nome = leitor.next();

                    System.out.println("Digite o local de nascimento do autor: ");
                    novoLivro.autor.localNasc = leitor.next();

                    listaLivros.add(novoLivro);

                    System.out.println("Livro cadastrado com Sucesso!!!!");

                    break;

                case "2":
                    if (listaLivros.size() > 0) {

                        for (Livro cadaLivro : listaLivros) {
                            System.out.println("Título: " + cadaLivro.titulo);
                            System.out.println("Preço: " + cadaLivro.preco);
                            System.out.println("Data de Lançamento: " + cadaLivro.dataLancamento.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
                            System.out.println("Nome do autor: " + cadaLivro.autor.nome +" -" + " local de nascimento: " + cadaLivro.autor.localNasc);

                            System.out.println();
                            /*System.out.println("Aperte ENTER para continuar");
                            leitor.nextLine();*/
                        }

                    } else {
                        System.out.println("Lista vazia!");

                    }
                    break;
                case "0":

                    System.out.println("Até logo!!!!");

            }



        }while (!opcao.equals("0"));
    }
}
