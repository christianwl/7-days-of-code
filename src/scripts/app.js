import { executarPrimeiroDesafio } from "./challenges/dia-1.js";
import { executarSegundoDesafio } from "./challenges/dia-2.js";

function executarDesafios() {
  executarPrimeiroDesafio();
  executarSegundoDesafio();
}

const botao = document.getElementById("btn-iniciar");
botao.addEventListener("click", executarDesafios);
