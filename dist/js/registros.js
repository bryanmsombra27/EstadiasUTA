import {
    enviarCamposValidos,
    showSuccess
} from './verificarEnviar/enviarCamposValidos.js';

///DOM Queries
const form = document.getElementById('register-form');
const inputs = document.querySelectorAll('.register__input');

//Function Expression
const enviarDatos = e => {
    e.preventDefault();

    enviarCamposValidos(e, "http://localhost/backendsiacc/controllers/signUpDocente.php");


};




form.addEventListener('submit', enviarDatos);
//cuando se ingresa la informacion se elimina el mensaje de error
inputs.forEach((input, index) => input.addEventListener('input', showSuccess.bind(null, input, index)));