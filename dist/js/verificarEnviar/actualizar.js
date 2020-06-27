import {
    enviarDatosServer
} from './enviarCamposValidos.js';

///ACTUALIZACION DE PERSONAL
const actualizarPersonal = async (e, url) => {
    const idpersonal = e.target.idpersonal;
    const clave = e.target.clave;
    const ap_paterno = e.target.ap_paterno;
    const ap_materno = e.target.ap_materno;
    const nombre = e.target.nombre;

    const llavesDinamicas = [
        "idpersonal",
        "clave",
        "ap_paterno",
        "ap_materno",
        "nombre"
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        idpersonal.value,
        clave.value,
        ap_paterno.value,
        ap_materno.value,
        nombre.value);

    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Personal Actualizado!',
            'El personal  ha sido Actualizado con exito!',
            'success'
        )
        location.reload();
    }
}

export {
    actualizarPersonal
}