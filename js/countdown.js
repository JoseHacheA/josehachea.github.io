window.addEventListener('DOMContentLoaded', (event) => {
  // Definir la fecha y hora objetivo del countdown
  const targetDate = new Date('2023-08-30T23:59:59').getTime();

  // Actualizar el contador cada segundo
  setInterval(() => {
    // Obtener la fecha y hora actual
    const currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha y hora objetivo y la actual
    const difference = targetDate - currentDate;

    // Calcular los días, horas, minutos y segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formatear la salida del contador
    const formattedCountdown = `${String(days).padStart(2, '0')}:${String(
      hours
    ).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    // Actualizar el contenido del elemento con el contador
    document.getElementById('countdown').textContent = formattedCountdown;
  }, 1000);
});
