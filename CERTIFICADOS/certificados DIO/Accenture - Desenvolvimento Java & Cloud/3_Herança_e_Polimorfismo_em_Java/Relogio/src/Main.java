public class Main {
    public static void main(String[] args) {

        Relogio brasileiro = new RelogioBrasileiro();
        brasileiro.setHora(18);
        brasileiro.setMinuto(30);
        brasileiro.setSegundo(45);

        Relogio americano = new RelogioAmericano();
        americano.ajustarHorario(brasileiro);

        System.out.println("Horário Brasileiro: " + brasileiro.getHorarioFormatado());
        System.out.println("Horário Americano: " + americano.getHorarioFormatado());
    }
}
