public abstract class Relogio {

    protected int hora;
    protected int minuto;
    protected int segundo;


    public int getHora() {
        return hora;
    }

    public int getMinuto() {
        return minuto;
    }

    public int getSegundo() {
        return segundo;
    }


    public void setHora(int hora) {
        if (hora < 0 || hora > 23) {
            throw new IllegalArgumentException("Hora inválida");
        }
        this.hora = hora;
    }

    public void setMinuto(int minuto) {
        if (minuto < 0 || minuto > 59) {
            throw new IllegalArgumentException("Minuto inválido");
        }
        this.minuto = minuto;
    }

    public void setSegundo(int segundo) {
        if (segundo < 0 || segundo > 59) {
            throw new IllegalArgumentException("Segundo inválido");
        }
        this.segundo = segundo;
    }


    public String getHorarioFormatado() {
        return String.format("%02d:%02d:%02d", hora, minuto, segundo);
    }


    public abstract void ajustarHorario(Relogio relogio);
}
