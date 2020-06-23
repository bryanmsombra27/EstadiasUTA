import {
    routesServer,
    routes
} from './verificarEnviar/routes.js'
import {
    enviarCamposValidos,
    showSuccess,
    registroPlantel
} from './verificarEnviar/enviarCamposValidos.js';

///DOM Queries
const form = document.getElementById('register-form');
const inputs = document.querySelectorAll('.register__input');

console.log(inputs)
//Function Expression
const enviarDatos = e => {
    e.preventDefault();
    let url = location.href;

    switch (url) {
        case `${routes[0]}`:
            enviarCamposValidos(e, routesServer[0]);
            break;
        case `${routes[1]}`:
            registroPlantel(e, routesServer[1]);

            break;
    }

};



form.addEventListener('submit', enviarDatos);
//cuando se ingresa la informacion se elimina el mensaje de error
inputs.forEach((input, index) => input.addEventListener('input', showSuccess.bind(null, input, index)));