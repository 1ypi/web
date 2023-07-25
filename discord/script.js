document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name && message) {
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL";

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
      .then(() => alert("Mensaje enviado con éxito"))
      .catch((error) => alert("Error al enviar el mensaje: " + error));

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  } else {
    alert("Por favor, ingresa tu nombre y un mensaje antes de enviar");
  }
});
