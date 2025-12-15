//Escreva um código que receba o nome e a idade de 2 pessoas 
//e imprima a diferença de idade entre elas

import java.util.Scanner;

public class Exercicio_4 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Nome da primeira pessoa: ");
        String nome1 = scanner.nextLine();

        System.out.print("Idade da primeira pessoa: ");
        int idade1 = scanner.nextInt();
        scanner.nextLine(); // limpar buffer

        System.out.print("Nome da segunda pessoa: ");
        String nome2 = scanner.nextLine();

        System.out.print("Idade da segunda pessoa: ");
        int idade2 = scanner.nextInt();

        int diferenca = Math.abs(idade1 - idade2);

        System.out.println("A diferença de idade entre " + nome1 + " e " + nome2 + " é de " + diferenca + " anos");

        scanner.close();
    }
}
