public class RelogioAmericano extends Relogio {

    @Override
    public void setHora(int hora) {
        if (hora < 1 || hora > 12) {
            throw new IllegalArgumentException("Hora inválida para relógio americano");
        }
        this.hora = hora;
    }

    @Override
    public void ajustarHorario(Relogio relogio) {
        int horaConvertida = relogio.getHora();

        if (horaConvertida > 12) {
            horaConvertida -= 12;
        }
        if (horaConvertida == 0) {
            horaConvertida = 12;
        }

        this.setHora(horaConvertida);
        this.setMinuto(relogio.getMinuto());
        this.setSegundo(relogio.getSegundo());
    }
}
