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
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroDocentes.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroPlantel.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroEstatusAlumnos.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroMotivosBaja.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroCarreras.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/RegistroMaterias.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroModalidades.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/registro/registroNiveles.php"
];

//Peticiones GET
const routesServerRequest = [
    "http://localhost/koso/koso.php", //De esta ruta depende la tabla de ALUMNOS
    "http://localhost/backendsiacc/controllers/traerPersonal.php",
    "http://localhost/backendsiacc/controllers/cambiosMaterias.php",
    "http://localhost/backendsiacc/controllers/traerDocentes.php"
];
const routeRequest = [
    "http://localhost/InterfacesParaEstadias/dist/templates/docentes/Alumnos.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/DocentesRegistrados.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/PersonalRegistrado.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/CarrerasRegistradas.php"
];

//PETICIONES UPDATE
const routeUpdateServerRequest = [
    "http://localhost/backendsiacc/controllers/actualizarPersonal.php",
    "http://localhost/backendsiacc/controllers/actualizarDocente.php"
];
const routeUpdateRequest = [
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/PersonalRegistrado.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/DocentesRegistrados.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/CarrerasRegistradas.php"
]

//PETICIONES DELETE
const routeDeleteServerRequest = [
    "http://localhost/backendsiacc/controllers/eliminarPersonal.php",
    "http://localhost/backendsiacc/controllers/eliminarDocente.php"
];
const routeDeleteRequest = [
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/PersonalRegistrado.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/DocentesRegistrados.php",
    "http://localhost/InterfacesParaEstadias/dist/templates/cambios/CarrerasRegistradas.php"
];

export {
    routesServer,
    routes,
    routesServerRequest,
    routeRequest,
    routeUpdateServerRequest,
    routeUpdateRequest,
    routeDeleteServerRequest,
    routeDeleteRequest
};