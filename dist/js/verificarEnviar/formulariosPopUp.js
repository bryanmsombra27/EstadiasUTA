import {
    routeUpdateServerRequest,
    routeUpdateRequest
} from './routes.js';

import {
    actualizarPersonal,
    actualizarDocentes,
    actualizarCarrera,
    actualizarAlumnosRegistrados
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
                            <input type="number" class="register__input" value="${objetoPersonal.celular}" id="celular">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Email</label>
                            <input type="email" class="register__input" value="${objetoPersonal.email}" id="email">
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
const CarreraFormPopUp = (url, id) => {
    const formPopup = document.getElementById('form-popup');
    let newArray = [];

    //se realiza una nueva consulta para traer los datos que concuerden con el id selecionado  y este pueda ser pintando en cada uno de los inputs en pantalla
    fetch(url).then(res => res.json()).then(data => {

        let carreraArray = data[1];
        newArray = carreraArray.flat(Infinity).filter(dato => +dato.idcarrera === id);
        let objetoPersonal = newArray[0];
        formPopup.innerHTML = `
     <input type="hidden" name="id" value="${objetoPersonal.idcarrera}" id="idcarrera">
      <div class="register-field">
                     <div class="input-container">
                         <label for="carrera" class="register-label">Carrera</label>
                            <input type="text" class="register__input" value="${objetoPersonal.carrera}" id="carrera">
                         </div>                
                     </div>

                     <div class="register-field">
                         <div class="input-container">
                             <label for="clave" class="register-label">Clave</label>
                             <input type="text" class="register__input" value="${objetoPersonal.clave}" id="clave">
                         </div>
                         <div class="input-container">
                             <label for="clave" class="register-label">Plan</label>
                             <input type="text" class="register__input" value="${objetoPersonal.plan}" id="plan">
                         </div>
                         <div class="input-container">
                             <label for="clave" class="register-label">Numero de materias</label>
                             <input type="text" class="register__input" value="${objetoPersonal.num_materias}" id="num_materias">
                         </div>
                     </div>
                      <div class="register-field">
                         <div class="input-container">
                             <label for="clave" class="register-label">Referencia Escolar</label>
                             <input type="text" class="register__input" value="${objetoPersonal.ref_escuela}" id="ref_escuela">
                         </div>
                         <div class="input-container">
                             <label for="clave" class="register-label">Numero de Carrera</label>
                             <input type="text" class="register__input" value="${objetoPersonal.num_carerra}" id="num_carrera">
                         </div>
                         <div class="input-container">
                             <label for="clave" class="register-label">Ciudad</label>
                             <input type="text" class="register__input" value="${objetoPersonal.modalidad}" id="modalidad">
                         </div>
                     </div>                  
                 <input class="register__input--submit" type="submit" value="Actualizar">
           `;

    }).catch(err => console.log(err));

    /*ENVIAR LA PETICION DE ACTULIZAR LOS DATOS DE DOCENTES */
    formPopup.addEventListener('submit', (e) => {
        e.preventDefault();
        actualizarCarrera(e, routeUpdateServerRequest[1]);
    });
};


const alumnosRegistradosFormPopUp = (url, id) => {
    const formPopup = document.getElementById('form-popup');
    let newArray = [];

    //se realiza una nueva consulta para traer los datos que concuerden con el id selecionado  y este pueda ser pintando en cada uno de los inputs en pantalla
    fetch(url).then(res => res.json()).then(data => {

        console.log(data);

        newArray = data.filter(dato => +dato.idalumno === id);
        let objetoPersonal = newArray[0];

        console.log(objetoPersonal)
        formPopup.innerHTML = `
        <input type="hidden" name="idalumno" value="${objetoPersonal.idalumno}" id="idalumno">
         <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Matricula</label>
                            <input type="text" class="register__input" value="${objetoPersonal.matricula}" id="matricula">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Tutor</label>
                            <input type="text" class="register__input" value="${objetoPersonal.Tutor}" id="Tutor">
                        </div>
                    </div>

                    <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Apellido Paterno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ap_paterno}" id="ap_paterno">
                        </div>
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
                            <label for="clave" class="register-label">Beca</label>
                            <input type="text" class="register__input" value="${objetoPersonal.beca}" id="beca">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Celular</label>
                            <input type="text" class="register__input" value="${objetoPersonal.celular}" id="celular">
                        </div>
                    </div>
                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Colonia</label>
                            <input type="text" class="register__input" value="${objetoPersonal.colonia}" id="colonia">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Codigo Postal</label>
                            <input type="text" class="register__input" value="${objetoPersonal.cp}" id="cp">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">CURP</label>
                            <input type="text" class="register__input" value="${objetoPersonal.curp}" id="curp">
                        </div>
                    </div>
                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Direccion Trabajo</label>
                            <input type="text" class="register__input" value="${objetoPersonal.dir_trabajo}" id="dir_trabajo">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Direccion</label>
                            <input type="text" class="register__input" value="${objetoPersonal.direccion}" id="direccion">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Edad</label>
                            <input type="text" class="register__input" value="${objetoPersonal.edad}" id="edad">
                        </div>
                    </div>

                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Estado Civil</label>
                            <input type="text" class="register__input" value="${objetoPersonal.edo_civil}" id="edo_civil">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Email</label>
                            <input type="text" class="register__input" value="${objetoPersonal.email}" id="email">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Escuela de Procedencia</label>
                            <input type="text" class="register__input" value="${objetoPersonal.esc_procedencia}" id="esc_procedencia">
                        </div>
                    </div>
                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Estado</label>
                            <input type="text" class="register__input" value="${objetoPersonal.estado}" id="estado">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Estado Bachillerato</label>
                            <input type="text" class="register__input" value="${objetoPersonal.estado_bach}" id="estado_bach">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Status</label>
                            <input type="text" class="register__input" value="${objetoPersonal.estatus}" id="estatus">
                        </div>
                    </div>
                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Fecha fin Bachillerato</label>
                            <input type="number" class="register__input" value="${objetoPersonal.f_fin_bach}" id="f_fin_bach">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Fecha ingreso Bachillerato</label>
                            <input type="number" class="register__input" value="${objetoPersonal.f_ing_bach}" id="f_ing_bach">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Año de Nacimiento</label>
                            <input type="number" class="register__input" value="${objetoPersonal.f_nac_ano}" id="f_nac_ano">
                        </div>
                    </div>
                       <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Dia de Nacimiento</label>
                            <input type="number" class="register__input" value="${objetoPersonal.f_nac_dia}" id="f_nac_dia">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Mes de Nacimiento</label>
                            <input type="number" class="register__input" value="${objetoPersonal.f_nac_mes}" id="f_nac_mes">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Fecha Alta</label>
                            <input type="date" class="register__input" value="${objetoPersonal.fecha_alta}" id="fecha_alta">
                        </div>
                    </div>
                         <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Horario</label>
                            <input type="number" class="register__input" value="${objetoPersonal.horario}" id="horario">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Jefe</label>
                            <input type="text" class="register__input" value="${objetoPersonal.jefe}" id="jefe">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Localidad</label>
                            <input type="text" class="register__input" value="${objetoPersonal.localidad}" id="localidad">
                        </div>
                    </div>
                         <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Localidad del Bachillerato</label>
                            <input type="text" class="register__input" value="${objetoPersonal.localidad_bach}" id="localidad_bach">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Lugar de Nacimiento</label>
                            <input type="text" class="register__input" value="${objetoPersonal.lug_nac}" id="lug_nac">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Lugar de Trabajo</label>
                            <input type="text" class="register__input" value="${objetoPersonal.lugar_trabajo}" id="lugar_trabajo">
                        </div>
                    </div>
                         <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Nombre de la Madre</label>
                            <input type="text" class="register__input" value="${objetoPersonal.madre}" id="madre">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Municipio</label>
                            <input type="text" class="register__input" value="${objetoPersonal.municipio}" id="municipio">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Municipio del Bachillerato</label>
                            <input type="text" class="register__input" value="${objetoPersonal.municipio_bach}" id="municipio_bach">
                        </div>
                    </div>
                         <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Numero de Seguridad Social</label>
                            <input type="number" class="register__input" value="${objetoPersonal.nss}" id="nss">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Nombre del Padre</label>
                            <input type="text" class="register__input" value="${objetoPersonal.padre}" id="padre">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Contraseña</label>
                            <input type="text" class="register__input" value="${objetoPersonal.password}" id="password">
                        </div>
                    </div>
                      <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Promedio del Bachillerato</label>
                            <input type="number" class="register__input" value="${objetoPersonal.promedio_bach}" id="promedio_bach">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Puesto</label>
                            <input type="text" class="register__input" value="${objetoPersonal.puesto}" id="puesto">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Plantel</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ref_plantel}" id="ref_plantel">
                        </div>
                    </div>
                      <div class="register-field">
                         <div class="input-container">
                            <label for="clave" class="register-label">Region</label>
                            <input type="text" class="register__input" value="${objetoPersonal.region}" id="region">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Region del Bachillerato</label>
                            <input type="text" class="register__input" value="${objetoPersonal.region_bach}" id="region_bach">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Contraseña</label>
                            <input type="text" class="register__input" value="${objetoPersonal.sexo}" id="sexo">
                        </div>
                    </div>
                                  <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Telefono del Trabajo</label>
                            <input type="number" class="register__input" value="${objetoPersonal.tel_trabajo}" id="tel_trabajo">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Telefono</label>
                            <input type="number" class="register__input" value="${objetoPersonal.telefono}" id="telefono">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Tipo de Beca</label>
                            <input type="text" class="register__input" value="${objetoPersonal.tipo_beca}" id="tipo_beca">
                        </div>
                    </div>

                                  <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">¿Trabaja?</label>
                            <input type="text" class="register__input" value="${objetoPersonal.trabaja}" id="trabaja">
                        </div>
                        <div class="input-container">
                            <label for="clave" class="register-label">Turno</label>
                            <input type="text" class="register__input" value="${objetoPersonal.turno}" id="turno">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Usuario</label>
                            <input type="text" class="register__input" value="${objetoPersonal.usuario}" id="usuario">
                        </div>
                    </div>
                                   <div class="register-field">
                               <div class="input-container">
                            <label for="clave" class="register-label">Carrera</label>
                            <input type="text" class="register__input" value="${objetoPersonal.ref_carrera}" id="ref_carrera">
                        </div>
                        

                
                    </div>
                <input class="register__input--submit" type="submit" value="Actualizar">
          `;

    }).catch(err => console.log(err));

    /*ENVIAR LA PETICION DE ACTULIZAR LOS DATOS DE ALUMNOS REGISTRADOS */
    formPopup.addEventListener('submit', (e) => {
        e.preventDefault();

        actualizarAlumnosRegistrados(e, routeUpdateServerRequest[2]);

    });

};








export {
    personalFormPopUp,
    docentesFormPopUp,
    CarreraFormPopUp,
    alumnosRegistradosFormPopUp
}