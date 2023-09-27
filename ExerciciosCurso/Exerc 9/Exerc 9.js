let telinha = document.getElementById("telinha");
let expressao = "";

function pressionar(valor) {
    expressao += valor;
    telinha.value = expressao;
}

function limpar() {
    expressao = "";
    telinha.value = "";
}

function calcular() {
    try {
        const resultado = eval(expressao);
        telinha.value = resultado.toFixed(2);
        expressao = resultado.toString();
    } catch (error) {
        telinha.value = "Erro";
        expressao = "";
    }
}
