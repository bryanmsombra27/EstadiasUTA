import {
    popup
} from './modificar.js';


//DOM Queries
const impreso = document.querySelector('#tabla'); //la tabla donde se imprimiran los datos
const PanelControlBtn = document.getElementById('table__button'); //añadir el boton hasta el final de la tabla
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



/***PETICIONES GET */
const alumnos = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

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
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data)
        data.forEach((docente, index) => {
            impreso.innerHTML += `
              <tr class="table__row2">
                      <td class="table__item">${docente.clave}</td>
                      <td class="table__item">${docente.ap_paterno}</td>
                      <td class="table__item">${docente.ap_materno}</td>
                      <td class="table__item">${docente.nombre}</td>
                      <td class="table__item--actions flex">
                        <a href="#" class="table__item--modify popup2" id="popup" data-id="${docente.idpersonal}">Modificar</a>
                        <a href="#" class="table__item--delete" id="delete-popup" >Eliminar</a>
                    </td>
               

      `;
        });
        detenerSpiner();
        popup();
        PanelControlButton();

    }).catch(e => console.log(e));


    // paginacion(); paginacion solo sirve para cuando hay demasiados registros con registros minimos no funciona del todo
};
const docentes = (url) => {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        data.forEach((docente, index) => {
            impreso.innerHTML += `
              <tr class="table__row2">
                      <td class="table__item">${docente.clave}</td>
                      <td class="table__item">${docente.ap_paterno}</td>
                      <td class="table__item">${docente.ap_materno}</td>
                      <td class="table__item">${docente.nombre}</td>
                      <td class="table__item--actions">
                        <a href="#" class="table__item--modify popup2" id="popup" data-id="${docente.id_docente}">Modificar</a>
                        <a href="#" class="table__item--delete" id="delete-popup">Eliminar</a>
                    </td>
               

      `;
        });
        popup();
        paginacion(); //paginacion solo sirve para cuando hay demasiados registros con registros minimos no funciona del todo

        PanelControlButton();

    }).catch(e => console.log(e));
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