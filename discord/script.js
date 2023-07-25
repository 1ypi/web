let cooldownActive = false;

document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (cooldownActive) {
    alert("Por favor, espera 5 minutos antes de enviar otro mensaje.");
    return;
  }

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name && message) {
    if (containsLink(message)) {
      alert("No se permiten enlaces en el mensaje.");
      return;
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
        setCooldown();
      })
      .catch((error) => alert("Error al enviar el mensaje: " + error));
  } else {
    alert("Por favor, ingresa tu nombre y un mensaje antes de enviar");
  }
});

function setCooldown() {
  cooldownActive = true;
  document.getElementById("send-button").setAttribute("disabled", "true");

  setTimeout(() => {
    cooldownActive = false;
    document.getElementById("send-button").removeAttribute("disabled");
  }, 300000); // 5 minutos en milisegundos
}

function containsLink(text) {
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  return linkRegex.test(text);
}
