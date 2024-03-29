import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<PessoaFisica> listaPf = new ArrayList<>();
        PessoaFisica metodoPf = new PessoaFisica();

        ArrayList<PessoaJuridica> listaPJ = new ArrayList<>();
        PessoaJuridica metodoPJ = new PessoaJuridica();


        System.out.println("Bem vindo ao sistema de cadastro de Pessoas Físicas e Juridicas");

        Scanner leitor = new Scanner(System.in);

        String opcao;

        do {

            System.out.println("Escolha uma opção: 1 - Pessoa Física / 2 - Pessoa Jurídica / 0 - Sair");
            opcao = leitor.nextLine();

            switch (opcao) {
                case "1":

                    String opcaoPf;

                    do {
                        System.out.println("Digite uma opção: 1-Cadastrar PF / 2-Listar PF / 0-Voltar");
                        opcaoPf = leitor.nextLine();

                        switch (opcaoPf) {
                            case "1":

                                PessoaFisica novaPf = new PessoaFisica();
                                novaPf.endereco = new Endereco();

                                System.out.println("Digite o nome:");
                                novaPf.nome = leitor.nextLine();

                                System.out.println("Digite o cpf:");
                                novaPf.cpf = leitor.nextLine();

                                System.out.println("Digite o rendimento:");
                                novaPf.rendimento = leitor.nextFloat();

                                System.out.println("Digite a data de nascimento: (dd/mm/aaaa)");
                                novaPf.dataNasc = LocalDate.parse(leitor.next(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

                                Period idade = Period.between(novaPf.dataNasc, LocalDate.now());

                                if (idade.getYears() >= 18) {
                                    System.out.println("Idade Válida!");
                                } else {
                                    System.out.println("Idade Inválida!");
                                    break;
                                }

                                System.out.println("Digite o logradouro");
                                novaPf.endereco.logradouro = leitor.nextLine();

                                System.out.println("Digite o numero");
                                novaPf.endereco.numero = Integer.parseInt(leitor.nextLine());

                                System.out.println("Este endereço é comercial? S/N:");
                                String endCom = leitor.next();
                                novaPf.endereco.endComercial = endCom.equalsIgnoreCase("S")|| endCom.equalsIgnoreCase("s");

//                                if (endCom.equalsIgnoreCase("s")){
                            /*    if (endCom.equals("S") || endCom.equals("s")) {
                                    novoEndPf.endComercial = true;
                                } else {
                                    novoEndPf.endComercial = false;
                                }*/

                                /*novaPf.endereco = novoEndPf;*/

                                listaPf.add(novaPf);

                                System.out.println("Cadastro realizado com sucesso!");

                                break;

                            case "2":


                                if (listaPf.size() > 0) {

                                    for (PessoaFisica cadaPf : listaPf) {
                                        System.out.println("Nome: " + cadaPf.nome);
                                        System.out.println("CPF: " + cadaPf.cpf);
                                        System.out.println("Data de Nascimento: " + cadaPf.dataNasc.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
                                        System.out.println("Imposto a ser pago: " + metodoPf.CalcularImposto(cadaPf.rendimento));
                                        System.out.println("Endereço: " + cadaPf.endereco.logradouro + "-" + cadaPf.endereco.numero);

                                        System.out.println();
                                        System.out.println("Aperte ENTER para continuar");
                                        leitor.nextLine();
                                    }

                                } else {
                                    System.out.println("Lista vazia!");
                                }

                                break;

                            case "0":
                                System.out.println("Volta");
                                break;

                            default:
                                System.out.println("Opção inválida!");
                                break;
                        }

                    } while (!opcaoPf.equals("0"));

                    break;

                case "2":
                    String opcaoPj;

                    do {
                        System.out.println("Digite uma opção: 1-Cadastrar PJ / 2-Listar PJ / 0-Voltar");
                        opcaoPj = leitor.nextLine();

                        switch (opcaoPj) {
                            case "1":

                                PessoaJuridica novaPj = new PessoaJuridica();
                                Endereco novoEndPj = new Endereco();

                                System.out.println("Digite a Razão Social:");
                                novaPj.RazaoSocial = leitor.nextLine();

                                System.out.println("Digite o CNPJ:");
                                novaPj.CNPJ = leitor.nextLine();

                                System.out.println("Digite o rendimento:");
                                novaPj.rendimento = leitor.nextFloat();

                               /* System.out.println("Digite a data de nascimento: (dd/mm/aaaa)");
                                novaPj. = LocalDate.parse(leitor.next(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));*/

                               /* Period idade = Period.between(novaPf.dataNasc, LocalDate.now());*/

                              /*  if (idade.getYears() >= 18) {
                                    System.out.println("Idade Válida!");
                                } else {
                                    System.out.println("Idade Inválida!");
                                    break;
                                }
*/
                                System.out.println("Digite o logradouro");
                                novoEndPj.logradouro = leitor.next();

                                System.out.println("Digite o numero");
                                novoEndPj.numero = leitor.nextInt();

                                System.out.println("Este endereço é comercial? S/N:");
                                String endCom = leitor.next();

//                                if (endCom.equalsIgnoreCase("s")){
                                if (endCom.equals("S") || endCom.equals("s")) {
                                    novoEndPj.endComercial = true;
                                } else {
                                    novoEndPj.endComercial = false;
                                }

                                novaPj.endereco = novoEndPj;

                                listaPJ.add(novaPj);

                                System.out.println("Cadastro realizado com sucesso!");

                                break;

                            case "2":


                                if (listaPJ.size() > 0) {

                                    for (PessoaJuridica cadaPj : listaPJ) {
                                        System.out.println("RazaoSocial: " + cadaPj.RazaoSocial);
                                        System.out.println("CNPJ: " + cadaPj.CNPJ);
                                       /* System.out.println("Data de Nascimento: " + cadaPf.dataNasc.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));*/
                                        System.out.println("Imposto a ser pago: " + metodoPJ.CalcularImposto(cadaPj.rendimento));
                                        System.out.println("Endereço: " + cadaPj.endereco.logradouro + "-" + cadaPj.endereco.numero);

                                        System.out.println();
                                        System.out.println("Aperte ENTER para continuar");
                                        leitor.nextLine();
                                    }

                                } else {
                                    System.out.println("Lista vazia!");
                                }

                                break;

                            case "0":
                                System.out.println("Volta");
                                break;

                            default:
                                System.out.println("Opção inválida!");
                                break;
                        }

                    } while (!opcaoPj.equals("0"));

                    break;

                case "0":
                    System.out.println("case 0");
                    break;

                default:
                    System.out.println("default");
                    break;
            }

        } while (!opcao.equals("0"));
    }
}