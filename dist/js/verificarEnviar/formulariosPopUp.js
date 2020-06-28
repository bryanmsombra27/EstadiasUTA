import {
    routeUpdateServerRequest,
    routeUpdateRequest
} from './routes.js';

import {
    actualizarPersonal,
    actualizarDocentes
} from './actualizar.js';

const personalFormPopUp = (url, id) => {
    const formPopup = document.getElementById('form-popup');
    let newArray = [];

    //se realiza una nueva consulta para traer los datos que concuerden con el id selecionado  y este pueda ser pintando en cada uno de los inputs en pantalla
    fetch(url).then(res => res.json()).then(data => {

        console.log(data);

        newArray = data.filter(dato => +dato.idpersonal === id);
        let objetoPersonal = newArray[0];

        console.log(objetoPersonal)
        formPopup.innerHTML = `
        <input type="hidden" name="idpersonal" value="${objetoPersonal.idpersonal}" id="idpersonal">
         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Clave</label>
                            <input type="text" class="register__input" value="${objetoPersonal.clave}" id="clave">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Paterno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ap_paterno}" id="ap_paterno">
                        </div>
                    </div>

                    <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Materno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ap_materno}" id="ap_materno">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Nombre</label>
                            <input type="text" class="register__input" value="${objetoPersonal.nombre}" id="nombre">
                        </div>

                    </div>
                <input class="register__input--submit" type="submit" value="Actualizar">
          `;

    }).catch(err => console.log(err));

    /*ENVIAR LA PETICION DE ACTULIZAR LOS DATOS DE PERSONAL */
    formPopup.addEventListener('submit', (e) => {
        e.preventDefault();

        actualizarPersonal(e, routeUpdateServerRequest[0]);

    });

};

const docentesFormPopUp = (url, id) => {
    const formPopup = document.getElementById('form-popup');
    let newArray = [];

    //se realiza una nueva consulta para traer los datos que concuerden con el id selecionado  y este pueda ser pintando en cada uno de los inputs en pantalla
    fetch(url).then(res => res.json()).then(data => {

        console.log(data);

        newArray = data.filter(dato => +dato.id_docente === id);
        let objetoPersonal = newArray[0];

        console.log(objetoPersonal)
        formPopup.innerHTML = `
        <input type="hidden" name="id" value="${objetoPersonal.id_docente}" id="id_docente">
         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Clave</label>
                            <input type="text" class="register__input" value="${objetoPersonal.clave}" id="clave">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Paterno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ap_paterno}" id="ap_paterno">
                        </div>
                    </div>

                    <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Materno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ap_materno}" id="ap_materno">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Nombre</label>
                            <input type="text" class="register__input" value="${objetoPersonal.nombre}" id="nombre">
                        </div>

                    </div>

                     <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Domicilio</label>
                            <input type="text" class="register__input" value="${objetoPersonal.domicilio}" id="domicilio">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Colonia</label>
                            <input type="text" class="register__input" value="${objetoPersonal.colonia}" id="colonia">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Ciudad</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ciudad}" id="ciudad">
                        </div>

                    </div>

                    
                     <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Estado</label>
                            <input type="text" class="register__input" value="${objetoPersonal.estado}" id="estado">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Codigo Postal</label>
                            <input type="text" class="register__input" value="${objetoPersonal.cp}" id="cp">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Telefono</label>
                            <input type="text" class="register__input" value="${objetoPersonal.telefono}" id="telefono">
                        </div>

                    </div>

                         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Celular</label>
                            <input type="text" class="register__input" value="${objetoPersonal.celular}" id="celular">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Email</label>
                            <input type="text" class="register__input" value="${objetoPersonal.email}" id="email">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Sexo</label>
                            <input type="text" class="register__input" value="${objetoPersonal.sexo}" id="sexo">
                        </div>
                    </div>
                         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">RFC</label>
                            <input type="text" class="register__input" value="${objetoPersonal.rfc}" id="rfc">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">CURP</label>
                            <input type="text" class="register__input" value="${objetoPersonal.curp}" id="curp">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Cedula</label>
                            <input type="text" class="register__input" value="${objetoPersonal.cedula}" id="cedula">
                        </div>
                    </div>

                         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Fecha Ingreso</label>
                            <input type="text" class="register__input" value="${objetoPersonal.fecha_ing}" id="fecha_ing">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Categoria</label>
                            <input type="text" class="register__input" value="${objetoPersonal.categoria}" id="categoria">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Informacion Academica</label>
                            <input type="text" class="register__input" value="${objetoPersonal.inf_academ}" id="inf_academ">
                        </div>
                    </div>

                      <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Usuario</label>
                            <input type="text" class="register__input" value="${objetoPersonal.usuario}" id="usuario">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Contraseña</label>
                            <input type="text" class="register__input" value="${objetoPersonal.password}" id="password">
                        </div>
                        
                        <div class="input-container">
                            <label for="clave" class="register-label">Referencia de Escuela</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ref_escuela}" id="ref_escuela">
                        </div>
                    </div>


                    
                <input class="register__input--submit" type="submit" value="Actualizar">
          `;

    }).catch(err => console.log(err));

    /*ENVIAR LA PETICION DE ACTULIZAR LOS DATOS DE DOCENTES */
    formPopup.addEventListener('submit', (e) => {
        e.preventDefault();
        actualizarDocentes(e, routeUpdateServerRequest[1]);


    });

};

export {
    personalFormPopUp,
    docentesFormPopUp
}