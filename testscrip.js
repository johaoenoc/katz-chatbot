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

function simularEscribiendo(message) {
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
    // Agrega la simulación de "Escribiendo..." antes de la respuesta
    simularEscribiendo("Katz está escribiendo...");

    // Aquí puedes definir las respuestas del chatbot a diferentes entradas del usuario.
    if (userInput.includes("hola")) {
        // ...

        // Llama a simularEscribiendo con el mensaje real
        simularEscribiendo("Mensaje de respuesta real...");
    }
    // Resto de las respuestas
    // ...
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
