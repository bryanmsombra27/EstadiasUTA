 //DOM Queries
 const impreso = document.querySelector('#alumnos');
 const PanelControlBtn = document.getElementById('table__button');

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

 function paginacion() {
     $('#datatable').DataTable();
 }

 const koso = async () => {
     const res = await fetch('http://localhost/koso/koso.php');
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

 //Llamada de las Funciones  
 spiner();
 koso();