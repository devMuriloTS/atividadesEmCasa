function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, "0");
    const minuto = data.getMinutes().toString().padStart(2, "0");
    const segundo = data.getSeconds().toString().padStart(2, "0");
    const horaFormatada = `${hora}:${minuto}:${segundo}`;
    relogio.textContent = horaFormatada;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();