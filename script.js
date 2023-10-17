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
            <p><strong><span class="dots">...</span></strong></p>
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
        chatbotMessage("¡Hola! Soy Katz, tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedes escribir palabras clave como 'vpn', 'gmail', 'okta' y más, y te proporcionaré respuestas útiles. Estoy listo para asistirte.");
    }, 9000); // Retraso de 3 segundos
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
  // Convierte la entrada del usuario a minúsculas para que la búsqueda sea insensible a mayúsculas y minúsculas
  const userInputLower = userInput.toLowerCase();

  // Define las autorespuestas y sus respectivos retrasos en un objeto
  const autorespuestas = [
    {
      keywords: ["hola", "HOLA", "HOLA!", "HOLA "],
      respuesta: { mensaje: "¡Hola! ¿En qué puedo ayudarte?", delay: 3000 }
    },
    {
      keywords: ["ayuda", "AYUDA"],
      respuesta: { mensaje: "Claro, ¿en qué puedo ayudarte?", delay: 3000 }
    },
    {
      keywords: ["gmail", "correo", "Gmail"],
      respuesta: { mensaje: "Todo lo que necesites con respecto a Gmail lo hace el bot Alfred de Slack, para activarlo <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'>este enlace</a>.", delay: 3000 }
    },
    {
      keywords: ["vpn"],
      respuesta: { mensaje: "Si tienes problemas con la VPN, recomendamos que primero verifiques la configuracion que esta en <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/acceso-a-vpn?authuser=1'target='_blank'> este enlace </a>.", delay: 3000 }
    },
    {
      keywords: ["okta", "sso"],
      respuesta: { mensaje: "Todo lo que necesites con respecto a Okta SSO lo hace el bot Alfred de Slack, para activarlo <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'>este enlace</a>.", delay: 3000 }
    },
    {
      keywords: ["pc", "jumpcloud"],
      respuesta: { mensaje: "Si tienes problemas para acceder a la pc, tenemos estas guias para la autegestion desde Jumpcloud:<br><br><ul><li><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/cambiar-contrase%C3%B1a-de-la-compu/jumpcloud-cambio-de-contrase%C3%B1a?pli=1&authuser=1' target='_blank'> Cambio de contraseña en Jumpcloud</a></li><br><li><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/autenticaci%C3%B3n-en-2-pasos-jumpcloud?pli=1&authuser=1' target='_blank'> Activar Doble Autenticacion</a>.</li></ul>", delay: 3000 }
    },
    {
      keywords: ["katz"],
      respuesta: { mensaje: "<img src='Katz.png' width=80 alt='Descripción de la imagen'>", delay: 3000 }
    }
  ];

  // Verifica si hay una autorespuesta definida para la entrada del usuario
  for (const respuesta of autorespuestas) {
    for (const keyword of respuesta.keywords) {
      if (userInputLower.includes(keyword)) {
        // Agrega un retraso antes de mostrar la autorespuesta
        setTimeout(() => {
          addMessage("bot", respuesta.respuesta.mensaje);
        }, respuesta.respuesta.delay);

        return;
      }
    }
  }

  // Si no hay una autorespuesta definida, muestra la respuesta predeterminada sin retraso
  addMessage("bot", "Lo siento, no entiendo tu pregunta.");
}






sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim(); // Trim para eliminar espacios en blanco al inicio y al final
  if (userMessage) { // Verificar si el mensaje del usuario no está vacío
    addMessage("user", userMessage);
    userInput.value = "";

    const sendSound = document.getElementById("sendSound");
    sendSound.play();

    botResponse(userMessage); // Llama a botResponse sin esperar una respuesta específica
  }
});


userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
