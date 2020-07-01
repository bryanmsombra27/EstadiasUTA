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

///ACTUALIZACION DE CARRERA
const actualizarCarrera = async (e, url) => {
    const idcarrera = e.target.idcarrera;
    const clave = e.target.clave;
    const plan = e.target.plan;
    const num_materias = e.target.num_materias;
    const ref_escuela = e.target.ref_escuela;

    const llavesDinamicas = [
        "idcarrera",
        "clave",
        "plan",
        "num_materias",
        "ref_escuela",
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        idcarrera.value,
        clave.value,
        plan.value,
        num_materias.value,
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
///ACTUALIZACION DE ALUMNOS REGISTRADOS
const actualizarAlumnosRegistrados = async (e, url) => {
    const idalumno = e.target.idalumno;
    const matricula = e.target.matricula;
    const ap_paterno = e.target.ap_paterno;
    const ap_materno = e.target.ap_materno;
    const nombre = e.target.nombre;
    const direccion = e.target.direccion;
    const colonia = e.target.colonia;
    const localidad = e.target.localidad;
    const municipio = e.target.municipio;
    const region = e.target.region;
    const estado = e.target.estado;
    const cp = e.target.cp;
    const telefono = e.target.telefono;
    const celular = e.target.celular;
    const sexo = e.target.sexo;
    const f_nac_dia = e.target.f_nac_dia;
    const f_nac_mes = e.target.f_nac_mes;
    const f_nac_ano = e.target.f_nac_ano;
    const edad = e.target.edad;
    const email = e.target.email;
    const curp = e.target.curp;
    const edo_civil = e.target.edo_civil;
    const lug_nac = e.target.lug_nac;
    const padre = e.target.padre;
    const madre = e.target.madre;
    const Tutor = e.target.Tutor;
    const fecha_alta = e.target.fecha_alta;
    const esc_procedencia = e.target.esc_procedencia;
    const f_ing_bach = e.target.f_ing_bach;
    const f_fin_bach = e.target.f_fin_bach;
    const localidad_bach = e.target.localidad_bach;
    const municipio_bach = e.target.municipio_bach;
    const estado_bach = e.target.estado_bach;
    const region_bach = e.target.region_bach;
    const promedio_bach = e.target.promedio_bach;
    const trabaja = e.target.trabaja;
    const lugar_trabajo = e.target.lugar_trabajo;
    const jefe = e.target.jefe;
    const horario = e.target.horario;
    const puesto = e.target.puesto;
    const dir_trabajo = e.target.dir_trabajo;
    const tel_trabajo = e.target.tel_trabajo;
    const nss = e.target.nss;
    const beca = e.target.beca;
    const tipo_beca = e.target.tipo_beca;
    const ref_carrera = e.target.ref_carrera;
    const ref_plantel = e.target.ref_plantel;
    const turno = e.target.turno;
    const usuario = e.target.usuario;
    const password = e.target.password;



    const llavesDinamicas = [
        "id",
        "matricula",
        "ap_paterno",
        "ap_materno",
        "nombre",
        "direccion",
        "colonia",
        "localidad",
        "municipio",
        "region",
        "estado",
        "cp",
        "telefono",
        "celular",
        "sexo",
        "f_nac_dia",
        "f_nac_mes",
        "f_nac_ano",
        "edad",
        "email",
        "curp",
        "edo_civil",
        "lug_nac",
        "padre",
        "madre",
        "Tutor",
        "fecha_alta",
        "esc_procedencia",
        "f_ing_bach",
        "f_fin_bach",
        "localidad_bach",
        "municipio_bach",
        "estado_bach",
        "region_bach",
        "promedio_bach",
        "trabaja",
        "lugar_trabajo",
        "jefe",
        "horario",
        "puesto",
        "dir_trabajo",
        "tel_trabajo",
        "nss",
        "beca",
        "tipo_beca",
        "ref_carrera",
        "ref_plantel",
        "turno",
        "usuario",
        "password"
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        idalumno.value,
        matricula.value,
        ap_paterno.value,
        ap_materno.value,
        nombre.value,
        direccion.value,
        colonia.value,
        localidad.value,
        municipio.value,
        region.value,
        estado.value,
        cp.value,
        telefono.value,
        celular.value,
        sexo.value,
        f_nac_dia.value,
        f_nac_mes.value,
        f_nac_ano.value,
        edad.value,
        email.value,
        curp.value,
        edo_civil.value,
        lug_nac.value,
        padre.value,
        madre.value,
        Tutor.value,
        fecha_alta.value,
        esc_procedencia.value,
        f_ing_bach.value,
        f_fin_bach.value,
        localidad_bach.value,
        municipio_bach.value,
        estado_bach.value,
        region_bach.value,
        promedio_bach.value,
        trabaja.value,
        lugar_trabajo.value,
        jefe.value,
        horario.value,
        puesto.value,
        dir_trabajo.value,
        tel_trabajo.value,
        nss.value,
        beca.value,
        tipo_beca.value,
        ref_carrera.value,
        ref_plantel.value,
        turno.value,
        usuario.value,
        password.value
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
    actualizarDocentes,
    actualizarCarrera,
    actualizarAlumnosRegistrados
};