const cepInput = document.getElementById("cepInput");
const consultarCepButton = document.getElementById("verCep");
const resultadoCep = document.getElementById("resCep");

consultarCepButton.addEventListener("click", () => {
    const cep = cepInput.value.trim().replace("-", "");

    
    if (/^\d{8}$/.test(cep)) {
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
             .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    
                    resultadoCep.innerHTML = `
                                <h2>CEP: ${cep}:</h2>
                                <p>Rua: ${data.logradouro}</p>
                                <p>Bairro: ${data.bairro}</p>
                                <p>Cidade: ${data.localidade}</p>
                                <p>Estado: ${data.uf}</p>
                            `;
                } else {
                    resultadoCep.innerHTML = "CEP Invalido";
                }
            })
            .catch(error => {
                console.error("Erro", error);
                resultadoCep.innerHTML = "Erro";
            });
    } else {
        resultadoCep.innerHTML = "Digite um CEP válido com 8 dígitos numéricos.";
    }
});