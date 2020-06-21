//DOM Queries
const impreso = document.querySelector('#tabla'); //la tabla donde se imprimiran los datos
const PanelControlBtn = document.getElementById('table__button'); //añadir el boton hasta el final de la tabla
//function Expression
const PanelControlButton = () => {
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
                          <a href="javascript:ventanaSecundaria('evaluar.html')" class="table__item--evaluate">Evaluar</a>
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
    PanelControlButton();
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

export {
    spiner,
    alumnos,
    docentes
};