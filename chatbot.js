document.addEventListener("DOMContentLoaded", function () {
  // Función para que el chatbot emita un mensaje inicial
  function chatbotMessage(message) {
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.className = "item";
    messageElement.innerHTML = `
        <div class="cora">
            <img class="profile-image" src="./img/Katz.png" alt="Profile Image">
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
      <img class="profile-image" src="./img/Katz.png" alt="Profile Image">
    </div>
        <div class="msg">
            <p><span class="dots">escribiendo...</span></p>   
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
      chatbotMessage(
        "👋🏻 ¡Hola! soy Katz 🐱, tu asistente virtual.<br><br> ¿En qué puedo ayudarte hoy? 😜<br> <br>Puedes escribir palabras clave como ''vpn'', ''gmail'', ''okta'' y más, y te proporcionaré respuestas útiles.<br><br> ¡Estoy listo para asistirte! 🚀"
      );
    }, 4000); // Retraso de 3 segundos
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
  // Haz scroll hacia abajo para mostrar el último mensaje
  chatContent.scrollTop = chatContent.scrollHeight;
}

function botResponse(userInput) {
  // Convierte la entrada del usuario a minúsculas para que la búsqueda sea insensible a mayúsculas y minúsculas
  const userInputLower = userInput.toLowerCase();

  // Define las autorespuestas y sus respectivos retrasos en un objeto
  const autorespuestas = [
    {
      keywords: ["ayuda"],
      respuesta: { mensaje: "Claro, ¿en qué puedo ayudarte?", delay: 3000 },
    },
    {
      keywords: ["gmail", "correo", "google"],
      respuesta: {
        mensaje:
          "Te comento que actualmente tenemos al bot Alfred en slack que hace las siguientes funciones:<br><br><ul><li>Restablecer contraseñas</li><li>Obtener Código 2FA</li><li>Consultar Owner de Grupo</li><li>Crear Grupo</li><li>Unise a Grupo</li></ul><br>Para obtener estas funciones puedes activar Alfred desde <a href='https://app.slack.com/client/T052P4KCD/D047UEH4J9M/app' target='_blank'>este enlace</a><br><br>Pero, si el tema se trata de restablecer claves a Pickers, puedes solicitarlo dandole click a la imagen <button type='button'><a href='https://peyaplanning.atlassian.net/servicedesk/customer/portal/1/group/632' target='_blank'><img src='./img/Pickers_Jira.png' width='250'></a></button>",
        delay: 3000,
      },
    },
    {
      keywords: ["vpn"],
      respuesta: {
        mensaje:
          "Si tienes problemas con la VPN, recomendamos que primero verifiques la configuracion que esta en<br> <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/acceso-a-vpn?authuser=1'target='_blank'> este enlace.</a>",
        delay: 3000,
      },
    },
    {
      keywords: ["okta", "sso"],
      respuesta: {
        mensaje:
          "Todo lo que necesites con respecto a Okta SSO lo hace el bot Alfred de Slack, para activarlo <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'>este enlace</a>.<br><br> También tenemos estas opciones para autogestionarte manualmente, puede darle click a la imagen.<br><button type='button'><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/como-usar-el-bot-alfred?pli=1&authuser=1'target='_blank'><img src='./img/okta.jpg' width='250' style='border-radius:10px'></a></button>",
        delay: 3000,
      },
    },
    {
      keywords: ["pc", "jumpcloud"],
      respuesta: {
        mensaje:
          "Si tienes problemas para acceder a la pc, tenemos estas guias para la autegestion desde Jumpcloud:<br><br><ul><li><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/cambiar-contrase%C3%B1a-de-la-compu/jumpcloud-cambio-de-contrase%C3%B1a?pli=1&authuser=1' target='_blank'> Cambio de contraseña en Jumpcloud</a></li><br><li><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/autenticaci%C3%B3n-en-2-pasos-jumpcloud?pli=1&authuser=1' target='_blank'>Activar Doble Autenticacion</a></li>",
        delay: 3000,
      },
    },
    {
      keywords: ["inconcert", "telefonia"],
      respuesta: {
        mensaje:
          "Para verificar todo con respecto a nuestra Telefonia Virtual (Inconcert) lo puedes ver en la guia que te dejaré en este <a href='https://sites.google.com/pedidosya.com/itsupport/telefon%C3%ADa-virtual?authuser=1I' target='_blank'>enlace.</a> ",
        delay: 3000,
      },
    },
    {
      keywords: ["zoom"],
      respuesta: {
        mensaje:
          "Para zoom tenemos guias en <br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/zoom?authuser=1' target='_blank'>este enlace.</a>",
        delay: 3000,
      },
    },
    {
      keywords: ["slack"],
      respuesta: {
        mensaje:
          "Todo lo relacionado con Slack tenemos instructivos en este  <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/c%C3%B3mo-usar-slack-gu%C3%ADa-de-inicio-r%C3%A1pido?authuser=1' target='_blank'>este enlace.</a>",
        delay: 3000,
      },
    },
    {
      keywords: [
        "addin",
        "power query",
        "excel add in",
        "complemento sap",
        "sap analysis",
      ],
      respuesta: {
        mensaje:
          "Todo lo relacionado con Sap Add In & Power Query tenemos guias en<br> <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/otros-manuales/power-query-sap-add-in?authuser=1' target='_blank'>este enlace.</a>",
        delay: 3000,
      },
    },
    {
      keywords: ["katz"],
      respuesta: {
        mensaje:
          "Dime...<br><iframe src='https://giphy.com/embed/O3A3C7vGBqRnq' width='200' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",
        delay: 3000,
      },
    },
    {
      keywords: ["wifi", "peyalocal", "peyaguest", "red"],
      respuesta: {
        mensaje:
          "Si tienes problemas para la conexión al Wifi en la oficina tenemos guias en <BR><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/instrucciones-para-conectar-a-las-redes-wi-fi-peya-local-y-peya-guest-y-pro?authuser=1' target='_blank'>este enlace</a> para las redes dependiendo si es usuario interno o invitado.",
        delay: 3000,
      },
    },
    {
      keywords: [
        "audifonos",
        "auriculares",
        "headset",
        "mouse",
        "teclado",
        "baterias",
      ],
      respuesta: {
        mensaje:
          "Veo que consultas sobre Accesorios, si se te ha roto alguno puedes solicitarlo dandole click a la imagen<br><br><button type='button'><a href='https://peyaplanning.atlassian.net/servicedesk/customer/portal/1/group/4/create/12' targe='_blank'><img src='./img/Accesorios.png' width='200'></a></button><br><br> Pero si crees que pueda ser algun error o configuracion del Windows, como primer filtro te recomendamos ver la cola de actualizaciones en la Lupa, escribes 'Buscar Actualiaciones', las completas y la reincias. Luego de este filtro te sigue dando problemas, puedes solicitar asistencia tecnica en <br><a href='https://peyaplanning.atlassian.net/servicedesk/customer/portal/1/group/4/create/418' target='_blank'>este enlace</a>. ",
        delay: 3000,
      },
    },
    {
      keywords: ["jira"],
      respuesta: { mensaje: "<p>Tenemos las siguientes guías para Jira Service Management:</p><br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/jira-service-management/agregar-personas-a-proyectos?authuser=0' target='_blank'>Agregar personas a un proyecto</a><br><br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/jira-service-management/agregar-organizaciones-a-un-proyecto?authuser=0' target='_blank'>Agregar organizaciones a proyectos</a><br><br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/jira-service-management/crear-nueva-organizaci%C3%B3n?authuser=0' target='_blank'>Crear nueva organización</a><br><br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/jira-service-management/agregar-organizaciones-a-un-proyecto?authuser=0' target='_blank'>Agregar cliente a organización</a>"
      , delay: 3000 },
    },
    {
      keywords: ["tableau", "salesforce", "backoffice", "looker", "monday", "datadog", "bitly", "adjust", "ariba", "braze", "sap", "thinkcell", "adobe", "links de accesos"],
      respuesta: { mensaje: "<p>Para encontrar el acceso que buscas debes entrar en <a href='https://sites.google.com/pedidosya.com/itsupport/links-de-accesos-por-%C3%A1rea?authuser=0' target='_blank'>este enlace</a> y seleccionar el departamento que estas; ahí encontrarás todos los accesos.</p>", delay: 3000 },
    },
    {
      keywords: ["office", "microsoft", "licencia de office"],
      respuesta: { mensaje: "¿Cómo activar mi licencia de Office? <br><br> Para activarla te dejo la guía en <br><a href='https://sites.google.com/pedidosya.com/itsupport/instructivos/otros-manuales/microsoft-office' target='_blank'>este enlace</a>.", delay: 3000 },
    }
    
  ];

  // Verifica si hay una autorespuesta definida para la entrada del usuario
  for (const respuesta of autorespuestas) {
    for (const keyword of respuesta.keywords) {
      if (userInputLower.includes(keyword)) {
        // Agrega un retraso antes de mostrar la autorespuesta
        setTimeout(() => {
          addMessage("bot", respuesta.respuesta.mensaje);
          messageSound.play();
        }, respuesta.respuesta.delay);

        return;
      }
    }
  }

  // Si no hay una autorespuesta definida, muestra la respuesta predeterminada sin retraso
  addMessage(
    "bot",
    "Lo siento, no comprendo tu pregunta, por favor, escribe algún sinónimo de lo que necesites.<br><br> Además, tambien es posible que encuentres lo que necesitas en nuestra sección de 'Instructivos', donde tenemos una amplia variedad de guías disponibles.<br> <br><img src='./img/instructivos.jpg' width=250><br> Puedes acceder directamente a ellas a través de <a href='https://sites.google.com/pedidosya.com/itsupport/instructivos?authuser=1'target='_blank'>este enlace</a>"
  );
}

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim(); // Trim para eliminar espacios en blanco al inicio y al final
  if (userMessage) {
    // Verificar si el mensaje del usuario no está vacío
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

