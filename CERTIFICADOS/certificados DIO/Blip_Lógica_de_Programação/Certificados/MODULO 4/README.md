# 🧠 Blip - Lógica de Programação | Módulo 4

![Status](https://img.shields.io/badge/Status-Em%20Aprendizado-yellow)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Plataforma](https://img.shields.io/badge/Plataforma-DIO-blue)
![Curso](https://img.shields.io/badge/Curso-Blip-orange)
![Módulo](https://img.shields.io/badge/Módulo-4-success)
![Autor](https://img.shields.io/badge/Autor-Pedro%20Martins-black)

Repositório criado para armazenar os projetos, exercícios e exemplos desenvolvidos durante o **Módulo 4 do curso Blip - Lógica de Programação**, oferecido pela **DIO (Digital Innovation One)**.
---
## 📚 certificados
<img src="./img/OGZD1YNW.png" width="330px"> <img src="./img/ML1R5ZUZ.png" width="330px"> <img src="./img/SZINTT8C.png" width="330px"> 
<img src="./img/504J7PT7.png" width="330px"> <img src="./img/IAPRWTYD.png" width="330px"> 

# 📚 Projeto de Funções e Calculadora de Níveis de Heróis

Neste projeto, exploramos os principais conceitos de **funções em JavaScript**, incluindo funções simples, funções com parâmetros, funções com retorno, chamadas de função entre funções, manipulação de strings, cálculos com operadores, estruturas condicionais e laços de repetição. Além disso, aplicamos esses conceitos em um desafio prático: a calculadora de níveis de heróis.

---

## 📂 Funções Simples

No arquivo `script.js`, foi criada uma função de saudação chamada `saudar`. Ela recebe um parâmetro `nome` e imprime uma mensagem personalizada no console, mostrando que funções podem receber dados de entrada e executar ações com eles. Exemplo:

```javascript
function saudar(nome) {
  console.log("Olá, " + nome + "! Como você está?");
}

saudar("Pedrinho");
saudar("Mariana");
O console exibirá:

css
Copiar código
Olá, Pedrinho! Como você está?
Olá, Mariana! Como você está?
No script2.js, demonstramos como uma função pode chamar outra função. A função torrar chama a função injetarPao, mostrando que funções podem ser compostas e executar tarefas sequenciais:

javascript
Copiar código
function torrar(){
  console.log("torrando pão");
  injetarPao();
}

function injetarPao(){
  console.log("preparando para injetar o pão");
  console.log("finalizado");
}

torrar();
Saída esperada:

css
Copiar código
torrando pão
preparando para injetar o pão
finalizado
💡 Conceitos praticados: funções simples, reutilização, chamadas encadeadas e impressão de saída.

📂 Funções com Parâmetros
A função calcularIdade recebe dois parâmetros: nome e anoNascimento. Ela calcula a idade com base no ano atual e exibe a informação no console:

javascript
Copiar código
function calcularIdade(nome, anoNascimento) {
  let idade = 2023 - anoNascimento;
  console.log(nome + " tem " + idade + " anos!");
}

calcularIdade("Pedrinho", 2010);
calcularIdade("Mariana", 2008);
Saída esperada:

nginx
Copiar código
Pedrinho tem 13 anos!
Mariana tem 15 anos!
💡 Conceitos praticados: múltiplos parâmetros, variáveis locais, cálculos dentro da função e exibição de resultados.

📂 Funções com Retorno
No script.js, a função somar recebe dois números e retorna a soma. O valor retornado é armazenado em uma variável e exibido:

javascript
Copiar código
function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(5, 3);
console.log("A soma é: " + resultado);
Saída esperada:

css
Copiar código
A soma é: 8
No script2.js, a função getFirstName recebe um nome completo e um separador, retornando apenas o primeiro nome:

javascript
Copiar código
function getFirstName(name, splitChar){
  let firstName = name.split(splitChar)[0];
  return firstName;
}

let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-");
console.log("Seja bem vindo " + userName);

userName = getFirstName("Felipe Silva Han Solo", " ");
console.log("Seja bem vindo " + userName);
Saída esperada:

nginx
Copiar código
Seja bem vindo Carlos
Seja bem vindo Felipe
💡 Conceitos praticados: manipulação de strings, parâmetros, retorno de valores e reutilização de funções.

📂 Desafio: Calculadora de Níveis de Heróis
A função calcularNivel recebe a quantidade de vitorias e derrotas, calcula o saldo e determina o nível do herói com base nas regras fornecidas:

javascript
Copiar código
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
O laço while permite calcular o nível de múltiplos heróis de forma interativa, solicitando ao usuário que continue ou não:

javascript
Copiar código
let continuar = "sim";

while (continuar.toLowerCase() === "sim") {
  const vitorias = parseInt(gets());
  const derrotas = parseInt(gets());

  print(calcularNivel(vitorias, derrotas));

  print("Deseja calcular outro herói? (sim/não)");
  continuar = gets();
}
💡 Conceitos praticados:

Estrutura condicional if/else if/else

Operadores aritméticos (-)

Variáveis locais e constantes

Função com retorno

Laços de repetição (while)

Interação com o usuário (gets() e print())

Conversão de tipos (parseInt)

Controle de fluxo baseado em condições

✅ Resumo:
Este projeto integra funções simples, funções com parâmetros, funções com retorno, manipulação de strings, cálculos, estruturas condicionais e laços de repetição em exemplos práticos e em um desafio completo de calculadora de níveis de heróis, permitindo criar programas modulares, interativos e reutilizáveis em JavaScript.
