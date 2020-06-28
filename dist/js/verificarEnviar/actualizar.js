import {
    enviarDatosServer
} from "./enviarCamposValidos.js";

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
        "nombre",
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        idpersonal.value,
        clave.value,
        ap_paterno.value,
        ap_materno.value,
        nombre.value
    );

    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            "Personal Actualizado!",
            "El personal  ha sido Actualizado con exito!",
            "success"
        );
        location.reload();
    }
};
///ACTUALIZACION DE DOCENTES
const actualizarDocentes = async (e, url) => {
    const id = e.target.id_docente;
    const clave = e.target.clave;
    const ap_paterno = e.target.ap_paterno;
    const ap_materno = e.target.ap_materno;
    const nombre = e.target.nombre;
    const domicilio = e.target.domicilio;
    const colonia = e.target.colonia;
    const ciudad = e.target.ciudad;
    const estado = e.target.estado;
    const cp = e.target.cp;
    const telefono = e.target.telefono;
    const celular = e.target.celular;
    const email = e.target.email;
    const sexo = e.target.sexo;
    const rfc = e.target.rfc;
    const curp = e.target.curp;
    const cedula = e.target.cedula;
    const fecha_ing = e.target.fecha_ing;
    const categoria = e.target.categoria;
    const inf_academ = e.target.inf_academ;
    const usuario = e.target.usuario;
    const password = e.target.password;
    const ref_escuela = e.target.ref_escuela;
    console.log(id.value);
    const llavesDinamicas = ["id", "clave", "ap_paterno", "ap_materno", "nombre", "domicilio", "colonia", "ciudad", "estado", "cp", "telefono", "celular", "email", "sexo", "rfc", "curp", "cedula", "fecha_ing", "categoria", "inf_academ", "usuario", "password", "ref_escuela"];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        id.value,
        clave.value,
        ap_paterno.value,
        ap_materno.value,
        nombre.value,
        domicilio.value,
        colonia.value,
        ciudad.value,
        estado.value,
        cp.value,
        telefono.value,
        celular.value,
        email.value,
        sexo.value,
        rfc.value,
        curp.value,
        cedula.value,
        fecha_ing.value,
        categoria.value,
        inf_academ.value,
        usuario.value,
        password.value,
        ref_escuela.value
    );

    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            "Personal Actualizado!",
            "El personal  ha sido Actualizado con exito!",
            "success"
        );
        location.reload();
    }
};

export {
    actualizarPersonal,
    actualizarDocentes
};