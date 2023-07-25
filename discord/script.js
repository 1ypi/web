const COOLDOWN_TIME = 300000; // 5 minutos en milisegundos
let lastMessageTime = localStorage.getItem("lastMessageTime");
let cooldownActive = false;
const sendButton = document.getElementById("send-button");

// Convertir lastMessageTime a número
lastMessageTime = lastMessageTime ? Number(lastMessageTime) : 0;

if (lastMessageTime) {
  const elapsedTime = Date.now() - lastMessageTime;
  if (elapsedTime < COOLDOWN_TIME) {
    setCooldown(COOLDOWN_TIME - elapsedTime);
  }
}

document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (cooldownActive) {
    alert("Por favor, espera 5 minutos antes de enviar otro mensaje.");
    return;
  }

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) {
    alert("Por favor, ingresa tu nombre y un mensaje antes de enviar.");
    return;
  }

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
    setCooldown(COOLDOWN_TIME);
  })
  .catch((error) => alert("Error al enviar el mensaje: " + error));
});

function setCooldown(cooldownTime) {
  cooldownActive = true;
  sendButton.setAttribute("disabled", "true");

  setTimeout(() => {
    cooldownActive = false;
    sendButton.removeAttribute("disabled");
    localStorage.setItem("lastMessageTime", Date.now());
  }, cooldownTime);
}

function containsLink(text) {
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  return linkRegex.test(text);
}
