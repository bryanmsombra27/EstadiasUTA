import {
    routesServerRequest,
    routeRequest
} from './verificarEnviar/routes.js';
import {
    spiner,
    alumnos,
    docentes,
    carreras,
    personal,
    alumnosRegistrados
} from './verificarEnviar/peticiones.js';

//obteniendo la url de la ubicacion actual
let url = location.href;

//Llamada de las Funciones
switch (url) {
    case `${routeRequest[0]}`:
        spiner();
        alumnos(routesServerRequest[0]);
        break;
    case `${routeRequest[1]}`:
        spiner();
        docentes(routesServerRequest[3]);
        break;
    case `${routeRequest[2]}`:
        spiner();
        personal(routesServerRequest[1]);
        break;
    case `${routeRequest[3]}`:
        spiner();
        carreras(routesServerRequest[2]);
        break;
    case `${routeRequest[4]}`:
        spiner();
        alumnosRegistrados(routesServerRequest[0]);
        break;
}