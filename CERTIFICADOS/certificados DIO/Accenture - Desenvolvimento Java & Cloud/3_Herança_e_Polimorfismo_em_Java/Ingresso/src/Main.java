public class Main {
    public static void main(String[] args) {

        Ingresso meia = new MeiaEntrada(40, "Interestelar", false);
        System.out.println("Meia entrada: R$ " + meia.getValorReal());

        Ingresso familia = new IngressoFamilia(40, "Interestelar", true, 4);
        System.out.println("Ingresso família: R$ " + familia.getValorReal());
    }
}
