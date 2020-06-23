//Peticiones POST
const routesServer = ["http://localhost/backendsiacc/controllers/signUpDocente.php"];
const routes = ["http://localhost/InterfacesParaEstadias/dist/templates/registro/registroDocentes.html"];

//Peticiones GET
const routesServerRequest = [
    "http://localhost/koso/koso.php", //De esta ruta depende la tabla de ALUMNOS
    "http://localhost/backendsiacc/controllers/traerPersonal.php",
    "http://localhost/backendsiacc/controllers/cambiosMaterias.php"
];
const routeRequest = [
    "http://localhost/InterfacesParaEstadias/dist/templates/docentes/Alumnos.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/DocentesRegistrados.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/PersonalRegistrado.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/CarrerasRegistradas.html"
];

export {
    routesServer,
    routes,
    routesServerRequest,
    routeRequest
};