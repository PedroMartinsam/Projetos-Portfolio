# 🚦 Controle de LEDs via Serial (Arduino)

## 📌 Descrição

Este projeto permite controlar múltiplos LEDs utilizando comandos enviados pela comunicação serial do Arduino.

Através do monitor serial, é possível ligar LEDs individuais ou controlar todos ao mesmo tempo, simulando um painel de controle.

---

## 🎮 Como Usar

Abra o **Monitor Serial** do Arduino e envie os seguintes comandos:

| Comando | Ação                  |
| ------- | --------------------- |
| 1       | Liga LED Azul         |
| 2       | Liga LED Verde        |
| 3       | Liga LED Amarelo      |
| 4       | Liga LED Vermelho     |
| 5       | Liga LED Laranja      |
| 6       | Liga LED Cinza        |
| 7       | Liga todos os LEDs    |
| 8       | Desliga todos os LEDs |

---

## 📷 Ilustração do Projeto

<img src="./PROJETOS/IMG_PROJETOS/Controle-de-LEDs-via-Serial.png" width="700px">

---

## 🧠 Como Funciona

* O Arduino fica “escutando” dados enviados pela porta serial
* Quando recebe um comando, ele interpreta usando `switch case`
* Cada número corresponde a uma ação específica
* Antes de executar, ele desliga todos os LEDs para evitar conflitos

---

## 🛠️ Componentes Utilizados

* Arduino Uno
* 6 LEDs (cores variadas)
* 6 Resistores (220Ω)
* Jumpers
* Protoboard

---

## 💻 Código

```cpp id="6r9dsa"
const int LED_AZUL = 2;
const int LED_VERDE = 3;
const int LED_AMARELO = 4;
const int LED_VERMELHO = 5;
const int LED_LARANJA = 6;
const int LED_CINZA = 7;

void setup() {
  Serial.begin(9600);  

  pinMode(LED_AZUL, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_AMARELO, OUTPUT);
  pinMode(LED_VERMELHO, OUTPUT);
  pinMode(LED_LARANJA, OUTPUT);
  pinMode(LED_CINZA, OUTPUT);
}

void desligarTodos() {
  digitalWrite(LED_AZUL, LOW);
  digitalWrite(LED_VERDE, LOW);
  digitalWrite(LED_AMARELO, LOW);
  digitalWrite(LED_VERMELHO, LOW);
  digitalWrite(LED_LARANJA, LOW);
  digitalWrite(LED_CINZA, LOW);
}

void loop() {
  if (Serial.available()) { 
    char byteRead = Serial.read(); 

    Serial.print("Botao Lido=");
    Serial.println(byteRead);

    desligarTodos();

    switch (byteRead) {

      case '1':
        digitalWrite(LED_AZUL, HIGH);
        Serial.println("LED AZUL LIGADO");
        break;

      case '2':
        digitalWrite(LED_VERDE, HIGH);
        Serial.println("LED VERDE LIGADO");
        break;

      case '3':
        digitalWrite(LED_AMARELO, HIGH);
        Serial.println("LED AMARELO LIGADO");
        break;

      case '4':
        digitalWrite(LED_VERMELHO, HIGH);
        Serial.println("LED VERMELHO LIGADO");
        break;

      case '5':
        digitalWrite(LED_LARANJA, HIGH);
        Serial.println("LED LARANJA LIGADO");
        break;

      case '6':
        digitalWrite(LED_CINZA, HIGH);
        Serial.println("LED CINZA LIGADO");
        break;

      case '7':
        digitalWrite(LED_AZUL, HIGH);
        digitalWrite(LED_VERDE, HIGH);
        digitalWrite(LED_AMARELO, HIGH);
        digitalWrite(LED_VERMELHO, HIGH);
        digitalWrite(LED_LARANJA, HIGH);
        digitalWrite(LED_CINZA, HIGH);
        Serial.println("TODOS OS LEDS LIGADOS");
        break;

      case '8':
        desligarTodos();
        Serial.println("TODOS OS LEDS DESLIGADOS");
        break;

      default:
        Serial.println("Comando invalido!");
        break;
    }
  }
}
```

---

## 📊 Resultado

O sistema responde instantaneamente aos comandos enviados pelo monitor serial, permitindo controle total dos LEDs.

---



## 👨‍💻 Autor

Pedro Martins
🔗 https://github.com/PedroMartinsam
