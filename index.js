// Función para actualizar la hora
function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    document.querySelector('.date-time').textContent = `${hours}:${minutes}`;
}

// Actualizar la hora cada minuto
setInterval(updateTime, 60000);
updateTime();
