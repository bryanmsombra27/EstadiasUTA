import {
    routesServerRequest,
    routeUpdateRequest,
    routeDeleteServerRequest,
    routeDeleteRequest
} from './routes.js';
import {
    personalFormPopUp,
    docentesFormPopUp
} from './formulariosPopUp.js';


let id = 0;

const popup = () => {
    let botones = document.querySelectorAll('.popup2');
    const deleteBtn = document.getElementById('delete-popup');
    let popup = document.querySelector('.popup-wrapper');
    let closePopup = document.querySelector('.popup-close');
    // const deleteForm = document.querySelector('#delete-form');


    //BOTON DE ACCION PARA ACTUALIZAR REGISTROS
    botones.forEach(boton => {
        boton.addEventListener('click', function (e) {
            id = +e.target.dataset.id;
            e.preventDefault();
            popup.style.display = "block";
            let url = location.href;
            console.log(url)

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

            }

        })
    })

    deleteBtn.addEventListener('click', function (e) {

        e.preventDefault();
        id = +e.target.previousElementSibling.dataset.id;
        // id = +e.target.popup.dataset.id;
        let formData = new FormData();

        formData.append("id", id);

        console.log(formData.get("id"));

        fetch(routeDeleteServerRequest[0], {
                method: "POST",
                body: formData
            }).then(res => res.json())
            .then(data => console.log(data))

    })


    //cerrar ventana emergente (POPUP)
    closePopup.addEventListener('click', () => {
        popup.style.display = "none";
    })
};




export {
    popup
};