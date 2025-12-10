let herois = [
  { nome: "João", xp: 850 },
  { nome: "Maria", xp: 3400 },
  { nome: "Pedro", xp: 9200 },
  { nome: "Ana", xp: 11000 }
];

for (let i = 0; i < herois.length; i++) {
  let nivel = "";
  let xp = herois[i].xp;
  let nome = herois[i].nome;

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
