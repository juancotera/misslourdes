//ENVIAR MENSAJE POR WHATSAPP
let enviar = document.getElementById("sent-wapp");
enviar.addEventListener("click", enviarMensaje);

function enviarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = "Hola soy " + encodeURIComponent(nombre) + " y quiero más información sobre las clases particulares https://www.educlassperu.com/";
    let numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    let enlace = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(enlace, "_blank");
}

//ENVIAR MENSAJE PARA SEPARAR SU CLASE
let separarClases = document.getElementById("separar-clases");
separarClases.addEventListener("click", separarTuClase);

function separarTuClase() {
    let mensaje = "Hola Miss quiero separar mi clase. 🥳";
    let numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    let enlace = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(enlace, "_blank");
}

//ENVIAR MENSAJE PARA SEPARAR SU CLASE
let inscribirse = document.getElementById("inscribirse");
inscribirse.addEventListener("click", inscribirCurso);

function inscribirCurso() {
    let mensaje = "Hola Maestra que capacitaciones tiene disponible ahora, quisiera información.";
    let numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    let enlace = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(enlace, "_blank");
}

//CONTACTO
const btnContac = document.getElementById("enviar-form");
btnContac.addEventListener("click", enviarForm);

function enviarForm() {
    let name = document.getElementById("name-form").value;
    let email = document.getElementById("email-form").value;
    let text = document.getElementById("mensaje-form").value;
    let concat = "Hola soy " + encodeURIComponent(name) +" mi correo es " + email + ", " + encodeURIComponent(text) + ".";
    let numero = "+51946768700"; // Reemplaza con el número de teléfono correcto
    let enlace = "https://wa.me/" + numero + "?text=" + concat;
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
    container.style.animationDuration = `${totalWidth / 20}s`; // Ajusta 50 para cambiar la velocidad
});