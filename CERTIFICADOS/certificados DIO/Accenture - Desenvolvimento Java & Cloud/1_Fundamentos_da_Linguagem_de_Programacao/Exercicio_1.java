//Escreva um código que receba o nome e o ano de nascimento de alguém e
//imprima na tela a seguinte mensagem: "Olá 'Fulano' você tem 'X' anos"

import java.util.Scanner;

public class Exercicio_1 {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Digite seu nome: ");
            String nome = scanner.nextLine();

            System.out.print("Digite o ano de nascimento: ");
            int anoNascimento = scanner.nextInt();

            int anoAtual = 2025;
            int idade = anoAtual - anoNascimento;

            System.out.println("Olá " + nome + ", você tem " + idade + " anos");
        }
    }
}
