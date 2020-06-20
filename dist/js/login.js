//DOM QUERIES
const loginFormDocentes = document.getElementById('login-form');
const usuarioContainer = document.querySelector('#verify1');
const contrasenaContainer = document.querySelector('#verify2');



//function Expression


const login = e => {
    e.preventDefault();

    const user = e.target.email;
    const pass = e.target.pass;
    if (user.value === '' && pass.value === '') {
        let mensaje = mensajesLogin('campo requerido');
        let mensaje2 = mensajesLogin('campo requerido');
        user.classList.add('error');
        pass.classList.add('error');
        usuarioContainer.append(mensaje);
        contrasenaContainer.append(mensaje2);
        return;
    } else if (user.value === '') {
        const mensaje = mensajesLogin('campo requerido');
        user.classList.add('error');
        usuarioContainer.append(mensaje);
        return;
    } else if (pass.value === '') {
        const mensaje = mensajesLogin('campo requerido');
        pass.classList.add('error');
        contrasenaContainer.append(mensaje);
        return;
    }
    // const login = {
    //     user,
    //     pass
    // }
    let usuario = user.value;
    let contra = pass.value;
    let datos = new FormData();



    datos.append('email', usuario);
    datos.append('pass', contra);

    fetch('http://localhost/backendsiacc/controllers/loginDocentes.php', {
        method: 'POST',
        body: datos
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

};





//Listeners
loginFormDocentes.addEventListener('submit', login);