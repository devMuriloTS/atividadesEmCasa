const meuElemen = document.getElementById("titulo");

// adicionando um ouvinte de evento de clique
meuElemen.addEventListener("click", function(){
    alert("Clicou!");
});

const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    alert("Olá, mundo.");
});