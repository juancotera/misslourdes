function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = "Hola soy " + encodeURIComponent(nombre) + " y quiero más información sobre las clases particulares https://www.educlassperu.com/";
    var numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    var enlace = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(enlace, "_blank");
}

// TESTIMONIOS
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonios-container');
    const testimonios = document.querySelectorAll('.testimonio');

    // Clonar los testimonios para crear un efecto de scroll infinito
    testimonios.forEach(testimonio => {
        const clon = testimonio.cloneNode(true);
        container.appendChild(clon);
    });

    // Ajustar la animación basada en el número de testimonios
    const totalWidth = testimonios.length * (300 + 30); // ancho + gap
    container.style.animationDuration = `${totalWidth / 50}s`; // Ajusta 50 para cambiar la velocidad
});