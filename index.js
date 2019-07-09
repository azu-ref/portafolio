const email = document.getElementById('correo');

    email.addEventListener("keyup", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("¡Necesito que ingreses una direccion de correo valida!");
        } else {
            email.setCustomValidity("");
        }
    })

const bgButton = document.getElementById('bg-button');
const menu = document.querySelector('.menu');
const link = document.querySelectorAll('.link');

console.log(link);
link.forEach(e => {
    e.addEventListener('click', mostrarMenu);
})

bgButton.addEventListener('click', mostrarMenu);

function mostrarMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');

    }else{
        menu.classList.add('active');

    }
}