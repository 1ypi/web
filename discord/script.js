document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name && message) {
    if (containsLink(message)) {
      alert("No se permiten enlaces en el mensaje.");
      return;
    }

    const cooldownMinutes = 5;
    const lastMessageTime = localStorage.getItem("lastMessageTime");

    if (lastMessageTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - parseInt(lastMessageTime)) / (1000 * 60); // Convert milliseconds to minutes

      if (elapsedTime < cooldownMinutes) {
        const remainingTime = Math.ceil(cooldownMinutes - elapsedTime);
        alert(`Debes esperar ${remainingTime} minutos antes de enviar otro mensaje.`);
        return;
      }
    }

    const webhookURL = "https://discord.com/api/webhooks/1126202607132745871/O-DIXoAPbM_MqPwuHhUmQUUMIS5JD6V1rjZ-J70dWBjj3hsU4xkkXMWOQRVNqwkulAMx";

    const payload = {
      content: `${name} ha dicho: "${message}"`,
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        alert("Mensaje enviado con éxito");
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";

        // Guardar el tiempo actual en localStorage para el cooldown por IP
        localStorage.setItem("lastMessageTime", new Date().getTime().toString());
      })
      .catch((error) => alert("Error al enviar el mensaje: " + error));
  } else {
    alert("Por favor, ingresa tu nombre y un mensaje antes de enviar");
  }
});

function containsLink(text) {
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  return linkRegex.test(text);
}
