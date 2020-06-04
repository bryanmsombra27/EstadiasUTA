//DOM Queries
const trigger = document.querySelectorAll('.trigger');
const enlacesImagenes = document.querySelectorAll('.dropdown__menu a');
const dropDown = document.querySelectorAll('.drop');

//Function Expression
const dropMenu = index => {
    const koso = document.querySelector(`#content-${index}`);
    dropDown[index].classList.toggle('active');
    koso.classList.toggle('active');
};
const  SnRedirect = e => {
    e.preventDefault();
};

//Listeners
enlacesImagenes.forEach(ancla => ancla.addEventListener('click', SnRedirect));
trigger.forEach((elemento, index) => elemento.addEventListener('click', dropMenu.bind( null,index)));