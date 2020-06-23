import {
    routesServerRequest,
    routeRequest
} from './verificarEnviar/routes.js';
import {
    spiner,
    alumnos,
    docentes,
    carreras
} from './verificarEnviar/peticiones.js';

let url = location.href;

//Llamada de las Funciones
switch (url) {
    case `${routeRequest[0]}`:
        spiner();
        alumnos(routesServerRequest[0]);
        break;
    case `${routeRequest[1]}`:
        spiner();
        docentes(routesServerRequest[1]);
        break;
    case `${routeRequest[2]}`:
        spiner();
        docentes(routesServerRequest[1]);
        break;
    case `${routeRequest[3]}`:
        spiner();
        carreras(routesServerRequest[2]);
        break;
}