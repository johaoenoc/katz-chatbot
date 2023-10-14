document.addEventListener("DOMContentLoaded", function () {
  // Función para que el chatbot emita un mensaje inicial
  function chatbotMessage(message) {
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.className = "item";
    messageElement.innerHTML = `
        <div class="cora">
            <img class="profile-image" src="Katz.png" alt="Profile Image">
        </div>
        <div class="msg autorespuesta">
            <p>${message}</p>
        </div>
    `;

    chatContent.appendChild(messageElement);
}

function simularEscribiendo() {
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.className = "item";
    messageElement.innerHTML = `
        <div class="cora">
            <img class="profile-image" src="Katz.png" alt="Profile Image">
        </div>
        <div class="msg">
            <p>Katz esta escribiendo...</p>
        </div>
    `;

    chatContent.appendChild(messageElement);
    // Reproduce el sonido de "Escribiendo..."
    const typingSound = document.getElementById("typingSound");
    typingSound.play();
    // Simula que el bot está escribiendo durante 2 segundos
    setTimeout(() => {
        // Limpia el mensaje de "Escribiendo..."
        chatContent.removeChild(messageElement);
        const messageSound = document.getElementById("messageSound");
        messageSound.play();

        // Llama a chatbotMessage con el mensaje real
        chatbotMessage("¡Hola! Soy Katz, ¿En qué puedo ayudarte?");
    }, 3000); // Retraso de 3 segundos
}

// Simulación de escritura antes del mensaje inicial
simularEscribiendo();

});

const chatContent = document.getElementById("chat-content");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(user, message) {
  const messageElement = document.createElement("div");
  messageElement.className =
    user === "user" ? "item right mensaje-cliente" : "item autorespuesta";
  const messageText = document.createElement("div");
  messageText.className = "msg";
  messageText.innerHTML = `<p>${message}</p>`;
  messageElement.appendChild(messageText);
  chatContent.appendChild(messageElement);
}

function botResponse(userInput) {
  
  // Aquí puedes definir las respuestas del chatbot a diferentes entradas del usuario.
  if (userInput.includes("hola")) {
    return "¡Hola! ¿En qué puedo ayudarte?";
  } else if (userInput.includes("ayuda")) {
    return "Claro, ¿en qué puedo ayudarte?";
  } else if (userInput.includes("gmail") || userInput.includes("correo")) {
    return "Todo lo que necesites con respecto a Gmail lo hace el bot Alfred de Slack, para activarlo <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'>este enlace</a>.";
  } else if (userInput.includes("vpn") || userInput.includes("VPN")) {
    return "Si tienes problemas con la VPN, recomendamos que primero verifiques la configuracion que esta en <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/acceso-a-vpn?authuser=1'target='_blank'> este enlace </a> ";
  } else if (userInput.includes("okta") || userInput.includes("sso")) {
    return "Todo lo que necesites con respecto a Okta SSO lo hace el bot Alfred de Slack, para activarlo <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'>este enlace</a>.";
  } else if (userInput.includes("pc") || userInput.includes("jumpcloud")) {
    return "Si tienes problemas para acceder a la pc, tenemos estas guias para la autegestion desde Jumpcloud:<br><br><ul><li> <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/cambiar-contrase%C3%B1a-de-la-compu/jumpcloud-cambio-de-contrase%C3%B1a?pli=1&authuser=1' target='_blank'>Cambio de contraseña en Jumpcloud</a></li><br><li> <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/autenticaci%C3%B3n-en-2-pasos-jumpcloud?pli=1&authuser=1' target='_blank'>Activar Doble Autenticacion</a>.</li></ul>";
  } else {
    return "Lo siento, no entiendo tu pregunta.";
  }

}

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value;
  addMessage("user", userMessage);
  userInput.value = "";

  const botMessage = botResponse(userMessage);
  addMessage("bot", botMessage);
  const sendSound = document.getElementById("sendSound");
        sendSound.play();
});

userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
