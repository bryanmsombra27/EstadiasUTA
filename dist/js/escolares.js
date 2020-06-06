//DOM Queries
const form = document.getElementById('form-escolares');
//function expression
const koso = e => {
    e.preventDefault();
    const email = e.target.user.value.trim();
    const pass = e.target.password.value.trim();

    const objeto = {
        email,
        pass
    }

    fetch('http://localhost/backendsiacc/controllers/loginDocentes.php', {
        method: 'POST',
        body: JSON.stringify(objeto)
    }).then(res => res.json()).then(data => {
        if (data === 'correo_null') {
            console.log('correo no encontrado');

        } else if (data === 'error_pwd') {
            console.log('contraseña invalida')
        } else {
            location.href = "C:\Users\yo_yo\OneDrive\Escritorio\InterfacesParaEstadias\dist\templates\panelControlEscolares.html";
        }
    }).catch(err => console.log(err));

    e.target.reset();
}
//listeners
form.addEventListener('submit', koso);