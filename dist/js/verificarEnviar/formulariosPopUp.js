import {
    routeUpdateServerRequest
} from './routes.js';

import {
    actualizarPersonal
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

export {
    personalFormPopUp
}