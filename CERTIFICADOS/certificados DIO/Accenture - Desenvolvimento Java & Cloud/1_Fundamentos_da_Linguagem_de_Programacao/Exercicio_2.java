import java.util.Scanner;

public class Exercicio_2 { public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Digite o tamanho do lado do quadrado: ");
    double lado = sc.nextDouble();

    double area = lado * lado;

    System.out.println("A área do quadrado é: " + area);

    sc.close();
}
}