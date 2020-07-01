import {
    routesServerRequest,
    routeUpdateRequest,
    routeDeleteServerRequest,
    routeDeleteRequest
} from './routes.js';
import {
    personalFormPopUp,
    docentesFormPopUp,
    CarreraFormPopUp,
    alumnosRegistradosFormPopUp
} from './formulariosPopUp.js';

const deletePersonal = async (id, url) => {
    let formData = new FormData();

    formData.append("id", id);

    console.log(formData.get("id"));

    // fetch(url, {
    //         method: "POST",
    //         body: formData
    //     }).then(res => res.json())
    //     .then(data => console.log(data))
    const res = await fetch(url, {
        method: "POST",
        body: formData
    })
    const data = await res.json();
    if (data.exito) {
        location.reload();
    }
}

let id = 0;

const popup = () => {
    let botones = document.querySelectorAll('.popup2');
    const deleteBtns = document.querySelectorAll('.delete-popup');
    let popup = document.querySelector('.popup-wrapper');
    let closePopup = document.querySelector('.popup-close');
    let sectionContainer = document.querySelector('.table-container');
    // const deleteForm = document.querySelector('#delete-form');


    //BOTON DE ACCION PARA ACTUALIZAR REGISTROS
    botones.forEach(boton => {
        boton.addEventListener('click', function (e) {
            id = +e.target.dataset.id;
            e.preventDefault();
            popup.style.display = "block";

            let url = location.href;

            console.log(id)
            //crear una funcion para que dependiendo la ruta en la que se encuentre actualmente  la funcion en automatico sepa que informacion debe traer
            switch (url) {
                case `${routeUpdateRequest[0]}`:
                    personalFormPopUp(routesServerRequest[1], id);
                    console.log(url)
                    break;
                case `${routeUpdateRequest[1]}`:
                    docentesFormPopUp(routesServerRequest[3], id);
                    console.log(url)
                    break;
                case `${routeUpdateRequest[2]}`:
                    console.log(id)
                    CarreraFormPopUp(routesServerRequest[2], id);
                    console.log(url)
                    break;
                case `${routeUpdateRequest[3]}`:
                    console.log(id)
                    sectionContainer.classList.add('activo');
                    alumnosRegistradosFormPopUp(routesServerRequest[0], id);
                    console.log(url)
                    break;
            }


        })
    })

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', function (e) {
            let url = location.href;
            let titulo;
            e.preventDefault();
            id = +e.target.previousElementSibling.dataset.id;
            if (url === routeDeleteRequest[0] || url === routeDeleteRequest[1] || routeDeleteRequest[2]) {

                let apellidoP = e.target.parentElement.parentElement.children[1].textContent;
                let apellidoM = e.target.parentElement.parentElement.children[2].textContent;
                let nombre = e.target.parentElement.parentElement.children[3].textContent;
                titulo = `¿Esta Seguro de Eliminar a ${nombre} ${apellidoM} ${apellidoP}?`;
            } else if (url === routeDeleteRequest[2]) {
                let nombre = e.target.parentElement.parentElement.children[1].textContent;
                titulo = `¿Esta Seguro de Eliminar la carrera de ${nombre} ?`;
            }

            // id = +e.target.popup.dataset.id;
            Swal.fire({
                title: titulo,
                text: "No sera posible a este usuario volver a acceder al sistema!",
                icon: 'warning',
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminalo del sistema!'
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'El personal ha sido Eliminado!',
                        'se elimino el usuario correctamente.',
                        'success'
                    )
                    switch (url) {
                        case `${routeDeleteRequest[0]}`:
                            deletePersonal(id, routeDeleteServerRequest[0]);
                            break;
                        case `${routeDeleteRequest[1]}`:
                            console.log(url);
                            console.log(id)
                            deletePersonal(id, routeDeleteServerRequest[1]);
                            break;
                        case `${routeDeleteRequest[3]}`:
                            deletePersonal(id, routeDeleteServerRequest[2]);
                            break;
                    }
                }
            })
        })
    })

    //cerrar ventana emergente (POPUP)
    closePopup.addEventListener('click', () => {
        popup.style.display = "none"
        if (sectionContainer.classList.contains('activo')) {
            sectionContainer.classList.remove('activo');
        }
    })
};




export {
    popup
};