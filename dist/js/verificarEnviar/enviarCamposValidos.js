const inputsContainers = document.querySelectorAll(".input-container");

//creando el mensaje de error y añadiendolo al DOM en caso de que el campo este vacio
const showError = (input, mensaje, index) => {
    if (
        !inputsContainers[index].lastElementChild.classList.contains("small-error")
    ) {
        console.log(index)
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
const fetchGet = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

//recogiendo los valores del formulario
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
///REGISTRO DOCENTES
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
    console.log(nulos)

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









export {
    enviarCamposValidos,
    showSuccess,
    registroPlantel
};