import br.com.dio.desafio.dominio.BootCamp;
import br.com.dio.desafio.dominio.Curso;
import br.com.dio.desafio.dominio.Dev;
import br.com.dio.desafio.dominio.Mentoria;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Curso curso1 = new Curso();

        curso1.setTitulo("Curso java");
        curso1.setDescricao("Descrição Curso java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("Curso js");
        curso2.setDescricao("Descrição Curso js");
        curso2.setCargaHoraria(4);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("Mentoria java");
        mentoria.setDescricao("Descrição Mentoria java");
        mentoria.setData(LocalDate.now());


       /* System.out.println(curso1);
        System.out.println(curso2);
        System.out.println(mentoria);*/

        BootCamp bootCamp = new BootCamp();
        bootCamp.setNome("BootCamp Java");
        bootCamp.setDescricao("Descrição do curso Java");
        bootCamp.getConteudos().add(curso1);
        bootCamp.getConteudos().add(curso2);
        bootCamp.getConteudos().add(mentoria);

        Dev devPedro = new Dev();
        devPedro.setNome("Pedro");
        devPedro.increverBootcamp(bootCamp);
        System.out.println("Conteúdo Incrito Pedro:"+ devPedro.getConteudosInscritos());

        devPedro.progredir();
        devPedro.progredir();
        System.out.println("-");
        System.out.println("Conteúdo Incrito Pedro:"+ devPedro.getConteudosInscritos());
        System.out.println("Conteúdo Concluidos Pedro:"+ devPedro.getConteudosConcluidos());
        System.out.println("XP:" + devPedro.calcularTotalXp());


        System.out.println("---------------");

        Dev devAmanda = new Dev();
        devAmanda.setNome("Amanda");
        devAmanda.increverBootcamp(bootCamp);
        System.out.println("Conteúdo Incrito Amanda:"+ devAmanda.getConteudosInscritos());
        devAmanda.progredir();
        devAmanda.progredir();
        devAmanda.progredir();
        System.out.println("-");
        System.out.println("Conteúdo Incrito Amanda:"+ devAmanda.getConteudosInscritos());
        System.out.println("Conteúdo Concluidos Amanda:"+ devAmanda.getConteudosConcluidos());
        System.out.println("XP:" + devAmanda.calcularTotalXp());




    }
}
