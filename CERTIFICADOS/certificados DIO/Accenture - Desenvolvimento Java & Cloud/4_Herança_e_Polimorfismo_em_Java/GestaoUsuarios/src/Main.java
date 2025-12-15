public class Main {
    public static void main(String[] args) {

        Gerente g = new Gerente("Ana", "ana@email.com", "123");
        g.realizarLogin();
        g.gerarRelatorioFinanceiro();

        Vendedor v = new Vendedor("Carlos", "carlos@email.com", "123");
        v.realizarVenda();
        v.realizarVenda();
        v.consultarVendas();

        Atendente a = new Atendente("Maria", "maria@email.com", "123");
        a.receberPagamento(100);
        a.receberPagamento(50);
        a.fecharCaixa();
    }
}
