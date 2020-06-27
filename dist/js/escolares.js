//DOM Queries
const loginForm = document.getElementById("login-form");
const usuarioContainer = document.querySelector('#verify1');
const contrasenaContainer = document.querySelector('#verify2');
const small = document.createElement('small');


//Validar campos 
const mensajesLogin = (mensaje) => {
  small.classList.add('form-error');
  small.textContent = mensaje;
  return small;
}

//function expression
const koso = async (e) => {
  e.preventDefault();
  let datos = new FormData();

  const email = e.target.email;
  const pass = e.target.pass;
  // if (email.value.trim() === '' && pass.value.trim() === '') {
  //     let mensaje = mensajesLogin('campo requerido');
  //     let mensaje2 = mensajesLogin('campo requerido');
  //     email.classList.add('error');
  //     pass.classList.add('error');
  //     usuarioContainer.append(mensaje);
  //     contrasenaContainer.append(mensaje2);
  //     return;
  // } else if (email.value === '') {
  //     const mensaje = mensajesLogin('campo requerido');
  //     email.classList.add('error');
  //     usuarioContainer.append(mensaje);
  //     return;
  // } else if (pass.value === '') {
  //     const mensaje = mensajesLogin('campo requerido');
  //     pass.classList.add('error');
  //     contrasenaContainer.append(mensaje);
  //     return;
  // }

  datos.append("email", email.value);
  datos.append("pass", pass.value);

  const res = await fetch("http://localhost/backendsiacc/controllers/loginDocentes.php", {

    method: "POST",
    body: datos
  });

  const data = await res.json();

  if (data.email) {

    small.textContent = data.email;
    const mensaje = mensajesLogin(data.email);
    email.classList.add('error');
    pass.classList.remove('error');
    usuarioContainer.append(mensaje);
    // console.log(data.email);
    return;

  } else if (data.password) {
    small.textContent = data.password;
    const mensaje = mensajesLogin(data.password);
    pass.classList.add('error');
    email.classList.remove('error');
    contrasenaContainer.append(mensaje);
    //  console.log(data.password);
    return;
  }

  if (email.classList.contains('error')) {
    email.classList.remove('error');
    usuarioContainer.querySelector('small').remove();
  } else if (pass.classList.contains('error')) {
    pass.classList.remove('error');
    contrasenaContainer.querySelector('small').remove();
  }


  if (location.href === "http://localhost/InterfacesParaEstadias/dist/templates/login/loginEscolares.html") {

    if (data[1]) {
      location.href = "http://localhost/InterfacesParaEstadias/dist/templates/panelControlEscolares.html"
    }
  }
  if (location.href === "http://localhost/InterfacesParaEstadias/dist/templates/login/loginDocentes.html") {

    if (data[1]) {
      location.href = "http://localhost/InterfacesParaEstadias/dist/templates/panelControlDocentes.php";
    }
  }




};


//listeners
loginForm.addEventListener("submit", koso);