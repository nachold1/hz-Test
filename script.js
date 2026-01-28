let inicioTiempo;
let esperando = false;

function iniciar() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("pantalla").style.backgroundColor = "red";
  document.getElementById("mensaje").textContent = "Espera el color verde...";

  let tiempoAleatorio = Math.random() * 3000 + 1000; // 1 a 4 segundos

  setTimeout(() => {
    document.getElementById("pantalla").style.backgroundColor = "green";
    document.getElementById("mensaje").textContent = "¡CLICK YA!";
    inicioTiempo = new Date().getTime();
    esperando = true;
  }, tiempoAleatorio);
}

document.getElementById("pantalla").onclick = function () {
  if (!esperando) {
    document.getElementById("resultado").textContent = "❌ Muy pronto!";
    return;
  }

  let finTiempo = new Date().getTime();
  let reaccion = finTiempo - inicioTiempo;

  document.getElementById("resultado").textContent =
    "⏱️ Tu tiempo de reacción: " + reaccion + " ms";

  esperando = false;
};
