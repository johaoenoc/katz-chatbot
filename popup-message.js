  // Muestra el mensaje emergente después de 2 segundos
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const popup = document.getElementById("popup");
      popup.classList.add("active");
    }, 2000);
  
    // Cierra el mensaje emergente cuando el botón "X" se hace clic
    const closePopup = document.getElementById("closePopup");
    closePopup.addEventListener("click", function() {
      const popup = document.getElementById("popup");
      popup.style.display = "none";
    });
  
    // Cierra el mensaje emergente cuando el botón "Katz" se hace clic
    const openChatbot = document.getElementById("openChatbot");
    openChatbot.addEventListener("click", function() {
      const popup = document.getElementById("popup");
      popup.style.display = "none";
    });
  });