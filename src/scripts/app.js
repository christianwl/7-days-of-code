import { showDay1 } from "./modules/day-1.js";
import { showDay2 } from "./modules/day-2.js";

function executarDesafios() {
  showDay1();
  showDay2();
}

const botao = document.getElementById("btn-iniciar");
botao.addEventListener("click", executarDesafios);
