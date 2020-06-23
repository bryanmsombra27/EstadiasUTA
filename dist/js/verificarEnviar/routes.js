//Peticiones POST
const routesServer = [
    "http://localhost/backendsiacc/controllers/signUpDocente.php",
    "http://localhost/backendsiacc/controllers/regPlantel.php",
    "http://localhost/backendsiacc/controllers/altaStatus.php",
    "http://localhost/backendsiacc/controllers/motivoBajas.php",
    "http://localhost/backendsiacc/controllers/registroCarrera.php",
    "http://localhost/backendsiacc/controllers/registroMaterias.php",
    "http://localhost/backendsiacc/controllers/registroModalidad.php",
    "http://localhost/backendsiacc/controllers/registroNiveles.php"
];
const routes = [
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroDocentes.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroPlantel.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroEstatusAlumnos.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroMotivosBaja.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroCarreras.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroMaterias.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroModalidades.html",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroNiveles.html"
];

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