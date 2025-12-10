
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


let continuar = "sim";

while (continuar.toLowerCase() === "sim") {
    const vitorias = parseInt(gets());
    const derrotas = parseInt(gets());

   
    print(calcularNivel(vitorias, derrotas));

    
    print("Deseja calcular outro herói? (sim/não)");
    continuar = gets();
}
