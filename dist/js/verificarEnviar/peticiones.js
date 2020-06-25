import {
    routesServerRequest,
    routeUpdateServerRequest
} from './routes.js';
import {
    actualizarPersonal
} from './enviarCamposValidos.js';


//DOM Queries
const impreso = document.querySelector('#tabla'); //la tabla donde se imprimiran los datos
const PanelControlBtn = document.getElementById('table__button'); //añadir el boton hasta el final de la tabla
let idpersonal = 0;
//function Expression
const PanelControlButton = () => {
    const a = document.createElement('a');
    a.classList.add('table__button');
    a.textContent = 'Panel de control';
    a.href = "../panelControlEscolares.html";

    PanelControlBtn.append(a);
};

const PanelControlButton2 = () => {
    const a = document.createElement('a');
    a.classList.add('table__button');
    a.textContent = 'Panel de control';
    a.href = "../panelControlDocentes.html";

    PanelControlBtn.append(a);
};

const spiner = () => {
    const div = document.createElement('div');
    div.classList.add('lds-dual-ring');
    impreso.append(div);
};

const detenerSpiner = () => {
    const spin = document.querySelector('.lds-dual-ring');
    spin.style.display = "none";
};

function paginacion() {
    $('#datatable').DataTable();
}

const popup = () => {
    let botones = document.querySelectorAll('.popup2');
    let popup = document.querySelector('.popup-wrapper');
    let closePopup = document.querySelector('.popup-close');

    botones.forEach(boton => {
        boton.addEventListener('click', function (e) {
            idpersonal = +e.target.dataset.personal;
            e.preventDefault();
            console.log(idpersonal);

            popup.style.display = "block";
            formPopUp(routesServerRequest[1]);

        })
    })
    closePopup.addEventListener('click', () => {
        popup.style.display = "none";
    })
}
const formPopUp = (url) => {
    const formPopup = document.getElementById('form-popup');
    let newArray = [];

    fetch(url).then(res => res.json()).then(data => {

        console.log(data);
        console.log(idpersonal);
        newArray = data.filter(dato => +dato.idpersonal === idpersonal);
        let objetoPersonal = newArray[0];

        console.log(objetoPersonal)
        formPopup.innerHTML = `
                     <div class="labels-popup">
                         <label for="clave">Clave:</label>
                         <label for="ap_paterno">Apellido Paterno:</label>
                         <label for="ap_materno">Apellido Materno:</label>
                        <label for="nombre">Nombre:</label>
                     </div>

                     <div class="inputs-popup">
                         <input type="hidden" name="idpersonal" value="${objetoPersonal.idpersonal}" id="idpersonal">
                         <input type="text" name="clave" value="${objetoPersonal.clave}" id="clave">
                         <input type="text" name="ap_paterno" value="${objetoPersonal.ap_paterno}" id="ap_paterno">
                         <input type="text" name="ap_materno" value="${objetoPersonal.ap_materno}" id="ap_materno">
                         <input type="text" name="nombre" value="${objetoPersonal.nombre}" id="nombre">
                     </div>
                     <input type="submit" value="Enviar" class="btn btn-popup">
          `;

    }).catch(err => console.log(err));


    /*ENVIAR LA PETICION DE ACTULIZAR LOS DATOS DE PERSONAL */
    formPopup.addEventListener('submit', (e) => {
        e.preventDefault();

        actualizarPersonal(e, routeUpdateServerRequest[0]);

    });

};



/***PETICIONES GET */
const alumnos = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    /*
                              < a href = "javascript:ventanaSecundaria('evaluar.html?matricula=${alumno.matricula}')"
                              class = "table__item--evaluate" > Evaluar < /a>
    */

    data.forEach((alumno, index) => {
        impreso.innerHTML += `
              <tr class="table__row2">
                      <td class="table__item">${alumno.matricula}</td>
                      <td class="table__item">${alumno.ap_paterno}</td>
                      <td class="table__item">${alumno.ap_materno}</td>
                      <td class="table__item">${alumno.nombre}</td>
                      <td class="table__item--actions">
                          <a href="#" class="table__item--evaluate">Evaluar</a>
                      </td>
                      <td class="table__item--actions">
                          <a href="#" class="table__item--evaluate parcial-2">Evaluar</a>
                      </td>
                      <td class="table__item--actions">
                          <a href="#" class="table__item--evaluate parcial-3">Evaluar</a>
                      </td>
                  </tr>
      `;
    });
    paginacion();
    PanelControlButton2();
};

const personal = (url) => {
    const arregloID = [];
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data)
        data.forEach((docente, index) => {
            impreso.innerHTML += `
              <tr class="table__row2">
                      <td class="table__item">${docente.clave}</td>
                      <td class="table__item">${docente.ap_paterno}</td>
                      <td class="table__item">${docente.ap_materno}</td>
                      <td class="table__item">${docente.nombre}</td>
                      <td class="table__item--actions">
                        <a href="#" class="table__item--modify popup2" id="popup" data-personal="${docente.idpersonal}">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
               

      `;
            arregloID.push(docente.idpersonal);
        });
        detenerSpiner();
        popup();
        PanelControlButton();

    }).catch(e => console.log(e));


    // paginacion(); paginacion solo sirve para cuando hay demasiados registros con registros minimos no funciona del todo
};
const docentes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    data.forEach((docente, index) => {
        impreso.innerHTML += `
              <tr class="table__row2">
                      <td class="table__item">${docente.clave}</td>
                      <td class="table__item">${docente.ap_paterno}</td>
                      <td class="table__item">${docente.ap_materno}</td>
                      <td class="table__item">${docente.nombre}</td>
                      <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
      `;
    });
    detenerSpiner();
    // paginacion(); paginacion solo sirve para cuando hay demasiados registros con registros minimos no funciona del todo
    PanelControlButton();
};








const carreras = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const carrerasEl = data[1];

    carrerasEl.forEach(carrera => {
        impreso.innerHTML += `
                   <tr class="table__row2">
                           <td class="table__item">${carrera.clave}</td>
                           <td class="table__item">${carrera.carrera}</td>
                           <td class="table__item">${carrera.plan}</td>
                           <td class="table__item--actions flex">
                             <a href="#" class="table__item--modify">Modificar</a>
                             <a href="#" class="table__item--delete">Eliminar</a>
                         </td>
           `;
    })
    paginacion(); //paginacion solo sirve para cuando hay demasiados registros con registros minimos no funciona del todo

}

export {
    spiner,
    alumnos,
    docentes,
    carreras,
    personal
};