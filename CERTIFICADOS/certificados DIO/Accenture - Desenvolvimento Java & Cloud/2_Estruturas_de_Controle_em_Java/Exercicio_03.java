//Escreva um código que o usuário entre com um primeiro número, 
//um segundo número maior que o primeiro e escolhe entre a opção par e impar,
//com isso o código deve informar todos os números pares ou ímpares
//(de acordo com a seleção inicial) no intervalo de números informados, 
// incluindo os números informados e em ordem decrescente;

import java.util.Scanner;

public class Exercicio_03 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int inicio = scanner.nextInt();

        System.out.print("Digite o segundo número (maior que o primeiro): ");
        int fim = scanner.nextInt();

        System.out.print("Escolha (par ou impar): ");
        String opcao = scanner.next();

        System.out.println("Resultado:");

        for (int i = fim; i >= inicio; i--) {
            if (opcao.equalsIgnoreCase("par") && i % 2 == 0) {
                System.out.println(i);
            } else if (opcao.equalsIgnoreCase("impar") && i % 2 != 0) {
                System.out.println(i);
            }
        }

        scanner.close();
    }
}
