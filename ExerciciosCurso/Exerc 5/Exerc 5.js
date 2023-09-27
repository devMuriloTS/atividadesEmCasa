function validarFormulario() {
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;

if (nome === "") {
    alert('é preciso informar um nome');
    return false;
    }

    if (email === "") {
        alert('é preciso informar um email');
        return false; 
    }
    return true;
}