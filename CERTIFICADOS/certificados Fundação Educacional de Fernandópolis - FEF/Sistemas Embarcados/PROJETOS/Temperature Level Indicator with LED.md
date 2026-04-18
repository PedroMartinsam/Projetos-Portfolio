# 🌡️ Temperature Level Indicator with LEDs (Arduino)

## 📌 Descrição

Este projeto utiliza um sensor de temperatura para monitorar o ambiente e indicar visualmente a faixa de temperatura através de 6 LEDs.

Cada LED representa um nível específico, indo de temperaturas muito baixas até temperaturas muito altas, funcionando como um termômetro visual.

---

## 🧠 Como Funciona

O Arduino:

1. Lê a temperatura através de um sensor analógico (ex: TMP36)
2. Converte o valor para graus Celsius
3. Acende um LED correspondente à faixa de temperatura

---

## 🌡️ Faixas de Temperatura

| Temperatura (°C) | LED  | Descrição       |
| ---------------- | ---- | --------------- |
| < -10°C          | LED1 | Muito frio      |
| -10°C a 10°C     | LED2 | Frio            |
| 10°C a 30°C      | LED3 | Agradável       |
| 30°C a 60°C      | LED4 | Quente          |
| 60°C a 90°C      | LED5 | Muito quente    |
| > 90°C           | LED6 | Extremo         |

---

## 📷 Ilustração do Projeto

<img src="./IMG_PROJETOS/temperature-level-indicator-with-led-arduino.png" width="700px">

---

## 🛠️ Componentes Utilizados

* Arduino Uno
* Sensor de temperatura (TMP36 ou similar)
* 6 LEDs (cores variadas)
* 6 Resistores (220Ω)
* Jumpers
* Protoboard

---

## 💻 Código

```cpp id="zj1qg6"
// LEDs
const int LED1 = 2;
const int LED2 = 3;
const int LED3 = 4;
const int LED4 = 5;
const int LED5 = 6;
const int LED6 = 7;

// Sensor
const int TEMP = A0;

void setup() {
  Serial.begin(9600);

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);
  pinMode(LED5, OUTPUT);
  pinMode(LED6, OUTPUT);
}

void desligarTodos() {
  digitalWrite(LED1, LOW);
  digitalWrite(LED2, LOW);
  digitalWrite(LED3, LOW);
  digitalWrite(LED4, LOW);
  digitalWrite(LED5, LOW);
  digitalWrite(LED6, LOW);
}

void loop() {

  int valor = analogRead(TEMP);

  float tensao = valor * (5.0 / 1023.0);
  float temperatura = (tensao - 0.5) * 100;

  Serial.print("Temperatura: ");
  Serial.print(temperatura);
  Serial.println(" °C");

  desligarTodos();

  if (temperatura < -10) {
    digitalWrite(LED1, HIGH);
  } 
  else if (temperatura < 10) {
    digitalWrite(LED2, HIGH);
  } 
  else if (temperatura < 30) {
    digitalWrite(LED3, HIGH);
  } 
  else if (temperatura < 60) {
    digitalWrite(LED4, HIGH);
  } 
  else if (temperatura < 90) {
    digitalWrite(LED5, HIGH);
  } 
  else {
    digitalWrite(LED6, HIGH);
  }

  delay(500);
}
```

---

## 📊 Resultado

O sistema indica em tempo real a temperatura do ambiente através de LEDs, permitindo uma leitura rápida e intuitiva sem necessidade de display.

---

## 👨‍💻 Autor

Pedro Martins
🔗 https://github.com/PedroMartinsam
