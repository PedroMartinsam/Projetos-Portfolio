// Classe genérica de um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o ataque com base no tipo do herói
        switch(this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis
const heroi1 = new Heroi('Gandalf', 100, 'mago');
const heroi2 = new Heroi('Conan', 35, 'guerreiro');
const heroi3 = new Heroi('Li Mei', 28, 'monge');
const heroi4 = new Heroi('Hanzo', 22, 'ninja');

// Testando os ataques
heroi1.atacar(); // mago atacou usando magia
heroi2.atacar(); // guerreiro atacou usando espada
heroi3.atacar(); // monge atacou usando artes marciais
heroi4.atacar(); // ninja atacou usando shuriken
