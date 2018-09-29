// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formulario = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

// Event listeners
eventListeners();

function eventListeners() {
    // Deshabilitar el botón de envio
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Envio del correo
    formulario.addEventListener('submit', envioMail);

    // Botón de reset
    btnReset.addEventListener('click', resetForm);
}

// Funciones

function inicioApp() {
    // Deshabilitar botón de enviar
    btnEnviar.disabled = true;
}

// Validación de campos
function validarCampo() {
    // Validar longitud del campo y que no esté vacío
    validarLongitud(this);

    // Valida que sea email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }

}

// Envío de mail
function envioMail(e) {
    // Spinner al presionar enviar
    const spinnerGIF = document.getElementById('spinner');
    spinnerGIF.style.display = 'block';


    // Animacion email
    const emailGIF = document.createElement('img');
    emailGIF.src = 'img/mail.gif';
    emailGIF.style.display = 'block';

    // Oculta spinner y muestra animación email
    setTimeout(function(){
        spinnerGIF.style.display = 'none';
        document.getElementById('loaders').appendChild(emailGIF);

        setTimeout(function(){
            emailGIF.remove();
            formulario.reset();
        }, 5000)
    }, 3000)


    e.preventDefault();
}

// Botón de reset
function resetForm(e) {
    // Borra valores del formulario
    formulario.reset();

    // Vuelve a deshabilitar el botón de envio en caso de que se completarán los campos correctamente
    inicioApp();
    e.preventDefault();

}

// Validación longitud
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// Validación de email
function validarEmail(campo) {
    const mail = campo.value;
    const validacion = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i; // Expresión para validar el correo

    if(validacion.test(mail)) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}