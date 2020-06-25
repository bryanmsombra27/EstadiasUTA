  let boton = document.querySelector('#popup');
  let popup = document.querySelector('.popup-wrapper');
  let closePopup = document.querySelector('.popup-close');


  boton.addEventListener('click', (e) => {
      e.preventDefault();

      popup.style.display = "block";
  })
  closePopup.addEventListener('click', () => {
      popup.style.display = "none";
  })