public class RelogioBrasileiro extends Relogio {

    @Override
    public void ajustarHorario(Relogio relogio) {
        this.setHora(relogio.getHora());
        this.setMinuto(relogio.getMinuto());
        this.setSegundo(relogio.getSegundo());
    }
}
