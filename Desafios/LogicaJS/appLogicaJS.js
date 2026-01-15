import { executarPrimeiroDesafio } from "./Dia1.js";
import { executarSegundoDesafio } from "./Dia2.js";

function executarDesafios(){
    executarPrimeiroDesafio();
    executarSegundoDesafio();
}

const botao = document.getElementById('btn-iniciar');
botao.addEventListener('click', executarDesafios);