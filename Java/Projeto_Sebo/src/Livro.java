import java.time.LocalDate;
import java.time.Period;
import java.util.Date;

public class Livro {

    public String titulo;

    public Autor autor;

    public float preco;

    public LocalDate dataLancamento;

    public int verificarTempoLanc(Livro data){

        Livro novoLivro = new Livro();

        Period tempolanc = Period.between(novoLivro.dataLancamento, LocalDate.now());

        if (tempolanc.getYears() > 5) {
            System.out.println("Tempo de lançamento válido para continuar o cadastro!!");
            System.out.println();
        } else {
            System.out.println("Esse livro não atende o tempo mínimo de 5 anos de lançamento.");
        }

        return
    }


}
