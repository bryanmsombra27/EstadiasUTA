import {
    routesServer,
    routes
} from './verificarEnviar/routes.js'
import {
    enviarCamposValidos,
    showSuccess,
    registroPlantel,
    registroEstatus,
    registroMotivoBaja,
    registroCarreras,
    registroMaterias,
    registroModalidades,
    registroNiveles
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
        case `${routes[2]}`:
            registroEstatus(e, routesServer[2]);
            break;
        case `${routes[3]}`:
            registroMotivoBaja(e, routesServer[3]);
            break;
        case `${routes[4]}`:
            registroCarreras(e, routesServer[4]);
            break;
        case `${routes[5]}`:
            registroMaterias(e, routesServer[5]);
            break;
        case `${routes[6]}`:
            registroModalidades(e, routesServer[6]);
            break;
        case `${routes[7]}`:
            registroNiveles(e, routesServer[7]);
            break;
    }

};



form.addEventListener('submit', enviarDatos);
//cuando se ingresa la informacion se elimina el mensaje de error
inputs.forEach((input, index) => input.addEventListener('input', showSuccess.bind(null, input, index)));