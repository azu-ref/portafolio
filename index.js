const email = document.getElementById('correo');
const name = document.getElementById('nombre');
const message = document.getElementById('mensaje');

email.addEventListener("keyup", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("¡Necesito que ingreses una direccion de correo valida!");
    } else {
        email.setCustomValidity("");
    }
})

const form = document.getElementById('contactform');

form.addEventListener('submit', e => {
    if(!email.value || !name.value || !message.value){
        alert('Debe llenar todos los campos')
        e.preventDefault();
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