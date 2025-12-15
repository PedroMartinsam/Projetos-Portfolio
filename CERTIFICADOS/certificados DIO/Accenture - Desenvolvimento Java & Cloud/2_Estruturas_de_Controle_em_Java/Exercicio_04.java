//Escreva um código onde o usuário informa um número inicial,
//posteriormente irá informar outros N números, 
//a execução do código irá continuar até que o número informado dividido
//pelo primeiro número tenha resto diferente de 0 na divisão, 
//números menores que o primeiro número devem ser ignorados

import java.util.Scanner;

public class Exercicio_04 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número inicial: ");
        int numeroBase = scanner.nextInt();

        while (true) {
            System.out.print("Digite outro número: ");
            int numero = scanner.nextInt();

            if (numero < numeroBase) {
                continue;
            }

            if (numero % numeroBase != 0) {
                System.out.println("Divisão com resto diferente de 0. Encerrando.");
                break;
            }

            System.out.println("Número aceito: " + numero);
        }

        scanner.close();
    }
}
