//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Employee employee = new Employee();
        Maneger maneger = new Maneger();


        maneger.setName("Pedro");
        maneger.setLogin("pedro");
        maneger.setPassword("4215");

        System.out.println(maneger.getName());
        System.out.println(maneger.getLogin());
        System.out.println(maneger.getPassword());

        }
    }
