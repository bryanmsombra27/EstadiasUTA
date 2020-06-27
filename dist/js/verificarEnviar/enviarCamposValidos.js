const inputsContainers = document.querySelectorAll(".input-container");

//creando el mensaje de error y añadiendolo al DOM en caso de que el campo este vacio
const showError = (input, mensaje, index) => {
    if (
        !inputsContainers[index].lastElementChild.classList.contains("small-error")
    ) {
        const small = document.createElement("small");
        small.classList.add("small-error");
        small.textContent = mensaje;
        input.classList.add("input-error");
        inputsContainers[index].append(small);
    }
};

//si el campo ya no esta vacio elimina el mensaje de error
const showSuccess = (input, index) => {
    input.classList.remove("input-error");
    if (
        inputsContainers[index].lastElementChild.classList.contains("small-error")
    ) {
        inputsContainers[index].querySelector("small").remove();
    }
};

//validando los campos vacios
const CamposVacios = (...arregloInputs) => {
    let vacios = 0;
    arregloInputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            showError(input, `el campo es requerido`, index);
            vacios++;
        } else {
            showSuccess(input, index);
        }
    });
    return vacios;
};

const enviarDatosServer = async (llaves, url, ...arregloCampos) => {
    let formData = new FormData();

    arregloCampos.forEach((campo, index) =>
        formData.append(llaves[index], campo)
    );

    const res = await fetch(url, {
        method: "POST",
        body: formData,
    });
    const data = await res.json();

    return data;
};

//recogiendo los valores del formulario 
//REGISTRO DOCENTES
const enviarCamposValidos = async (e, url) => {
    const apellidoP = e.target.apellidoP;
    const apellidoM = e.target.apellidoM;
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
    const rol = e.target.categoria;
    const inf_academ = e.target.inf_academ;
    const pass = e.target.pass;
    const pass2 = e.target.pass2;
    const plantel = e.target.refescuela;
    const nivel = e.target.nivel;
    let nulos = CamposVacios(
        apellidoP,
        apellidoM,
        nombre,
        domicilio,
        colonia,
        ciudad,
        estado,
        cp,
        telefono,
        celular,
        email,
        sexo,
        rfc,
        curp,
        cedula,
        fecha_ing,
        rol,
        inf_academ,
        pass,
        pass2,
        plantel,
        nivel
    );

    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = [
        "apellidoP",
        "apellidoM",
        "nombre",
        "domicilio",
        "colonia",
        "ciudad",
        "estado",
        "cp",
        "telefono",
        "celular",
        "email",
        "sexo",
        "rfc",
        "curp",
        "cedula",
        "fechaIngreso",
        "rol",
        "infacademica",
        "pass",
        "pass2",
        "refescuela",
        "nivel",
    ];
    if (pass.value.trim() === pass2.value.trim()) {

        const data = await enviarDatosServer(
            llavesDinamicas,
            url,
            apellidoP.value,
            apellidoM.value,
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
            rol.value,
            inf_academ.value,
            pass.value,
            pass2.value,
            plantel.value,
            nivel.value
        );

        if (data.msg) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo ya esta registrado!, por favor intente con otro correo',

            })
        }
        if (data.exito) {
            //colocar un sweet alert y fuga
            Swal.fire(
                'Usuario Registrado!',
                'El Docente ha sido Registrado con exito!',
                'success'
            )
            e.target.reset();
        }

    } else {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden!, por favor intente nuevamente',

        })
        return;
    }

};
///REGISTRO PLANTEL
const registroPlantel = async (e, url) => {
    const clave = e.target.clave;
    const nombre = e.target.nombre;
    const director = e.target.director;
    const direccion = e.target.direccion;
    const ciudad = e.target.ciudad;
    const estado = e.target.estado;
    const telefono = e.target.telefono;
    const turno = e.target.turno;
    let nulos = CamposVacios(
        clave,
        nombre,
        director,
        direccion,
        ciudad,
        estado,
        telefono,
        turno
    );

    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = [
        "clave",
        "nombre",
        "director",
        "direccion",
        "ciudad",
        "estado",
        "telefono",
        "turno"
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        clave.value,
        nombre.value,
        director.value,
        ciudad.value,
        estado.value,
        telefono.value,
        direccion.value,
        turno.value
    );
    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Plantel Registrado!',
            'El Plantel ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
//REGISTRO ALTA STATUS
const registroEstatus = async (e, url) => {
    const estatus = e.target.estatus;
    const descripcion = e.target.descripcion;

    let nulos = CamposVacios(estatus, descripcion);
    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = ["estatus", "descripcion"];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        estatus.value,
        descripcion.value,
    );
    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Estatus Registrado!',
            'El estatus del alumno ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
//REGISTRO MOTIVOS DE BAJA
const registroMotivoBaja = async (e, url) => {
    const motivo = e.target.motivo;

    let nulos = CamposVacios(motivo);
    console.log(nulos)

    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = ["motivo"];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        motivo.value
    );
    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Motivo Registrado!',
            'El motivo de baja del alumno ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
///REGISTRO CARRERAS
const registroCarreras = async (e, url) => {
    const clave = e.target.clave;
    const plan = e.target.plan;
    const carrera = e.target.carrera;
    const num_materias = e.target.num_materias;
    const ref_escuela = e.target.ref_escuela;

    let nulos = CamposVacios(
        clave,
        plan,
        carrera,
        num_materias,
        ref_escuela);

    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = [
        "clave",
        "plan",
        "carrera",
        "num_materias",
        "ref_escuela"
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        clave.value,
        plan.value,
        carrera.value,
        num_materias.value,
        ref_escuela.value);

    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Carrera Registrada!',
            'La Carrera  ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
///REGISTRO MATERIAS
const registroMaterias = async (e, url) => {
    const ref_escuela = e.target.ref_escuela;
    const refmodalidad = e.target.refmodalidad;
    const ref_carrera = e.target.ref_carrera;
    const nivel = e.target.nivel;
    const clave = e.target.clave;
    const materia = e.target.materia;
    const horas = e.target.horas;

    let nulos = CamposVacios(
        ref_escuela,
        refmodalidad,
        ref_carrera,
        nivel,
        clave,
        materia,
        horas);

    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = [
        "ref_escuela",
        "refmodalidad",
        "ref_carrera",
        "nivel",
        "clave",
        "materia",
        "horas"
    ];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        ref_escuela.value,
        refmodalidad.value,
        ref_carrera.value,
        nivel.value,
        clave.value,
        materia.value,
        horas.value);

    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Materia Registrada!',
            'La Materia  ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
//REGISTRO MODALIDADES
const registroModalidades = async (e, url) => {
    const clave = e.target.clave;
    const nombre = e.target.nombre;

    let nulos = CamposVacios(clave, nombre);
    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = ["clave", "nombre"];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        clave.value,
        nombre.value
    );
    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Modalidad Registrada!',
            'La nueva modalidad ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
//REGISTRO NIVELES
const registroNiveles = async (e, url) => {
    const nivel = e.target.nivel;
    const descripcion = e.target.descripcion;

    // let nulos = CamposVacios(nivel, descripcion);
    let nulos = CamposVacios(nivel);
    if (nulos > 0) {
        return;
    }
    const llavesDinamicas = ["nivel", "descripcion"];

    const data = await enviarDatosServer(
        llavesDinamicas,
        url,
        nivel.value,
        descripcion.value
    );
    console.log(data);
    if (data.exito) {
        //colocar un sweet alert y fuga
        Swal.fire(
            'Nivel Registrado!',
            'Nuevo nivel ha sido Registrado con exito!',
            'success'
        )
        e.target.reset();
    }
}
export {
    enviarCamposValidos,
    showSuccess,
    registroPlantel,
    registroEstatus,
    registroMotivoBaja,
    registroCarreras,
    registroMaterias,
    registroModalidades,
    registroNiveles,
    enviarDatosServer
};