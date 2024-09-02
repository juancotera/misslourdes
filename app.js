function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = "Hola soy " + encodeURIComponent(nombre) + " y quiero más información sobre las clases particulares https://www.educlassperu.com/";
    var numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    var enlace = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(enlace, "_blank");
}