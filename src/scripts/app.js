import { showDay1 } from "./modules/day-1.js";
import { executarSegundoDesafio } from "./modules/day-2.js";

function executarDesafios() {
  showDay1();
  executarSegundoDesafio();
}

const botao = document.getElementById("btn-iniciar");
botao.addEventListener("click", executarDesafios);
