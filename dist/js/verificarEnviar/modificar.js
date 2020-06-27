import {
    routesServerRequest,
} from './routes.js';
import {
    personalFormPopUp
} from './formulariosPopUp.js';

let id = 0;

const popup = () => {
    let botones = document.querySelectorAll('.popup2');
    const deleteBtn = document.getElementById('delete-popup');
    let popup = document.querySelector('.popup-wrapper');
    let closePopup = document.querySelector('.popup-close');

    //BOTON DE ACCION PARA ACTUALIZAR REGISTROS
    botones.forEach(boton => {
        boton.addEventListener('click', function (e) {
            id = +e.target.dataset.id;
            e.preventDefault();
            popup.style.display = "block";


            //crear una funcion para que dependiendo la ruta en la que se encuentre actualmente  la funcion en automatico sepa que informacion debe traer
            personalFormPopUp(routesServerRequest[1], id);

        })
    })

    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        id = +e.target.previousElementSibling.dataset.id;

    })


    //cerrar ventana emergente (POPUP)
    closePopup.addEventListener('click', () => {
        popup.style.display = "none";
    })
};




export {
    popup
};