function adiconar() {
    const input = document.getElementById("adicionar");
    const texto = input.value.trim();

    if (texto !== "") {
        const lista = document.getElementById("lista");
        const li = document.createElement("li");
        li.innerHTML = `${texto}`;
        lista.appendChild(li);
        input.value = "";
    }
}