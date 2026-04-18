# 🚦 LED Sequence Controller (Arduino)

## 📌 Descrição

Este projeto simula uma sequência de LEDs utilizando Arduino, onde cada LED acende e apaga em ordem, criando um efeito visual semelhante a um semáforo ou sistema de sinalização.

---

## 🧠 Como Funciona

O Arduino ativa cada LED individualmente com um intervalo de tempo definido (`delay`), criando uma sequência contínua:

1. LED 1 acende 💡
2. LED 1 apaga ❌
3. LED 2 acende 💡
4. LED 2 apaga ❌
5. LED 3 acende 💡
6. LED 3 apaga ❌

E o ciclo se repete automaticamente 🔁

---

## 📷 Ilustração do Projeto

<img src="./IMG_PROJETOS/led-sequence-controller.png" width="700px">

---

## 🛠️ Componentes Utilizados

* Arduino Uno
* 3 LEDs (vermelho, amarelo, verde)
* 3 Resistores (220Ω)
* Jumpers
* Protoboard

---

## 💻 Código

```cpp id="6c7a8y"
void setup()
{
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  digitalWrite(2, HIGH);
  delay(1000);
  digitalWrite(2, LOW);
  delay(1000);

  digitalWrite(3, HIGH);
  delay(1000);
  digitalWrite(3, LOW);
  delay(1000);

  digitalWrite(4, HIGH);
  delay(1000);
  digitalWrite(4, LOW);
  delay(1000);
}
```

---

## 📊 Resultado

O sistema executa uma sequência contínua de LEDs, criando um efeito visual simples e eficiente de sinalização.

---


## 👨‍💻 Autor

Pedro Martins
🔗 https://github.com/PedroMartinsam
