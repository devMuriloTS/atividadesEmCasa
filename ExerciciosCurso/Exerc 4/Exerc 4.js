
const contadorTexto = document.getElementById("cont");
const botao = document.getElementById("botaozera");

let contador = 0;

function apertarBotao() {
     contador++;
     contadorTexto.textContent = contador;
}
botao.addEventListener("click", apertarBotao);