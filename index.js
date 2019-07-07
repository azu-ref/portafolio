var email = document.getElementById('correo');

    email.addEventListener("keyup", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("¡Necesito que ingreses una direccion de correo valida!");
        } else {
            email.setCustomValidity("");
        }
    })