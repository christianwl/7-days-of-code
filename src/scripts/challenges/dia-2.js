import {
  receberString,
  receberValorPositivo,
  receberNumeroEspecifico,
} from "../utils/functions.js";

let nomeUsuario = "";
let idadeUsuario = 0;
let linguagemProgramacao = "";
let gostaLinguagem = 0;

const RESPOSTAS_GOSTA_PROGRAMACAO = {
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

function escolherNumeroAleatorio(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function executarSegundoDesafio() {
  nomeUsuario = receberString("Qual é o seu nome?");
  idadeUsuario = receberValorPositivo("Quantos anos você tem?");
  linguagemProgramacao = receberString(
    "Qual linguagem de programação você está estudando?",
  );

  alert(
    `Ola ${nomeUsuario}, você tem ${idadeUsuario} ano${
      idadeUsuario > 1 ? "s" : ""
    } e já está aprendendo ${linguagemProgramacao}`,
  );

  gostaLinguagem = receberNumeroEspecifico(
    `Você gosta de estudar ${linguagemProgramacao}?\nResponda com o número correspondente:\n\n[ 1 ] Sim\n[ 2 ] Não`,
    [1, 2],
  );

  let respostas = RESPOSTAS_GOSTA_PROGRAMACAO[gostaLinguagem];
  alert(respostas[escolherNumeroAleatorio(respostas.length - 1)]);
}
