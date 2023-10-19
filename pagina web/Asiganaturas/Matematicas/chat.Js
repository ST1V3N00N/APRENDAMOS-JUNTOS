function enviarMensaje() {
    var mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "") {
        var chat = document.getElementById("chat");
        var nuevoMensaje = document.createElement("div");
        nuevoMensaje.className = "mensaje propio";
        nuevoMensaje.innerHTML = "<p>" + mensaje + "</p>";
        chat.appendChild(nuevoMensaje);
        document.getElementById("mensaje").value = "";
      
    }
}
