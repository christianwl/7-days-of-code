import {
  collectString,
  collectPositiveValue,
  collectSpecificNumber,
} from "../utils/prompt-manager.js";

const LANGUAGE_RESPONSES = {
  1: [
    "Muito bom! Continue estudando e você terá muito sucesso.",
    "Excelente! Persistindo no estudo, você alcançará grandes resultados.",
    "Fico feliz em ouvir isso! O esforço no aprendizado traz grandes conquistas.",
    "Ótimo! A dedicação ao estudo é o caminho para o sucesso.",
    "Perfeito! O estudo constante leva você a lugares incríveis.",
  ],
  2: [
    "Ahh, que pena... Você poderia tentar aprender outras linguagens.",
    "Entendo. Talvez uma abordagem diferente possa te interessar.",
    "Não desanime, outras linguagens podem despertar seu interesse.",
    "Tudo bem! Vale a pena explorar outras opções para encontrar o que você mais gosta.",
    "Cada pessoa tem suas preferências. Buscar novos conhecimentos é sempre válido.",
  ],
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function showDay2() {
  const userData = collectUserData();

  const agePlural = userData.age > 1 ? "s" : "";
  alert(
    `Ola ${userData.name}, você tem ${userData.age} ano${agePlural} e já está aprendendo ${userData.programLanguage}`,
  );

  const userChoice = collectSpecificNumber(
    `Você gosta de estudar ${userData.programLanguage}?\nResponda com o número correspondente:\n\n[ 1 ] Sim\n[ 2 ] Não`,
    [1, 2],
  );

  let responses = LANGUAGE_RESPONSES[userChoice];
  alert(responses[getRandomNumber(responses.length)]);
}

function collectUserData() {
  const userName = collectString("Qual é o seu nome?");
  const userAge = collectPositiveValue("Quantos anos você tem?");
  const userProgramLanguage = collectString(
    "Qual linguagem de programação você está estudando?",
  );

  return { name: userName, age: userAge, programLanguage: userProgramLanguage };
}
