// Hay muchas formas de elegir un nodo DOM; con este obtenemos el control de formulario cuadro de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if (!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = '"Whoops! It looks like you forgot to add your email"';
  } else if (email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = '"Please provide a valid email address"';
  }

  // Establece el estilo apropiado
  emailError.className = 'error active';
}