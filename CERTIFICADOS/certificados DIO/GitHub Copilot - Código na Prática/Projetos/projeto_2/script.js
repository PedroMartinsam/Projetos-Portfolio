const quiz = [
  {
    pergunta: "Em que ano o Corinthians foi fundado?",
    alternativas: ["1908", "1909", "1910", "1912"],
    correta: 2 // 1910
  },
  {
    pergunta: "Qual é o estádio oficial do Corinthians?",
    alternativas: ["Pacaembu", "Morumbi", "Neo Química Arena", "Maracanã"],
    correta: 2
  },
  {
    pergunta: "Quantos Mundiais de Clubes o Corinthians possui?",
    alternativas: ["1", "2", "3", "4"],
    correta: 1
  },
  {
    pergunta: "Qual jogador é conhecido como 'O Doutor'?",
    alternativas: ["Cássio", "Sócrates", "Rivelino", "Marcelinho"],
    correta: 1
  },
  {
    pergunta: "Qual é o maior rival do Corinthians?",
    alternativas: ["Santos", "São Paulo", "Palmeiras", "Flamengo"],
    correta: 2
  }
];
function exibirQuestao(indice) {
  const questao = quiz[indice];

  let texto = questao.pergunta + "\n";

  for (let i = 0; i < questao.alternativas.length; i++) {
    texto += `${i} - ${questao.alternativas[i]}\n`;
  }

  const respostaUsuario = Number(prompt(texto));

  if (respostaUsuario < 0 || respostaUsuario > 3 || isNaN(respostaUsuario)) {
    alert("Resposta inválida!");
    return null;
  }

  return respostaUsuario;
}
function validarResposta(indice, respostaUsuario) {
  const correta = quiz[indice].correta;

  if (respostaUsuario === correta) {
    return true;
  } else {
    return false;
  }
}
let pontos = 0;

for (let i = 0; i < quiz.length; i++) {
  const resposta = exibirQuestao(i);

  if (resposta !== null) {
    const acertou = validarResposta(i, resposta);

    if (acertou) {
      alert("✅ Resposta correta!");
      pontos++;
    } else {
      alert("❌ Resposta errada!");
    }
  } else {
    alert("Questão anulada por resposta inválida.");
  }
}

alert("Fim do quiz! Sua pontuação foi: " + pontos + " pontos.");
