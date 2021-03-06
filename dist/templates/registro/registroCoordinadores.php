<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/registros.css">
</head>

<body>
    <header class="header">
        <div class="header-container">
            <div class="header__img-container">
                <a href="#">
                    <img src="../../img/uta.png" alt="LogoUTA">
                </a>
            </div>
            <div class="header__text-container">
                <h1 class="">Registro Coordinadores</h1>
            </div>
    </header>
    <section class="register-career container">
        <form action="#" class="register__form">

            <!-- <label for="numEm" class="register-label">Número de Empleado</label>
                <input type="text" class="register__input" id="numEm" name=""> -->
            <div class="register-field">
                <div class="input-container">
                    <label for="apellidoP" class="register-label">Apellido Paterno</label>
                    <input type="text" class="register__input" id="apellidoP" name="">
                </div>

                <div class="input-container">
                    <label for="apellidoM" class="register-label">Apellido Materno</label>
                    <input type="text" class="register__input" id="apellidoM" name="">
                </div>

                <div class="input-container">
                    <label for="nombre" class="register-label">Nombre</label>
                    <input type="text" class="register__input" id="nombre" name="">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label for="dom" class="register-label">Domicilio</label>
                    <input type="text" class="register__input" id="dom" name="">
                </div>
                <div class="input-container">
                    <label for="col" class="register-label">Colonia</label>
                    <input type="text" class="register__input" id="col" name="">
                </div>
                <div class="input-container">
                    <label for="ciudad" class="register-label">Ciudad</label>
                    <input type="text" class="register__input" id="ciudad" name="">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label for="estado" class="register-label">Estado</label>
                    <input type="text" class="register__input" id="estado" name="">
                </div>
                <div class="input-container">
                    <label for="cp" class="register-label">Codigo Postal</label>
                    <input type="text" class="register__input" id="cp" name="">
                </div>
                <div class="input-container">
                    <label for="tel" class="register-label">Telefono</label>
                    <input type="text" class="register__input" id="tel" name="">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label for="cel" class="register-label">Celular</label>
                    <input type="text" class="register__input" id="cel" name="">
                </div>
                <div class="input-container">
                    <label for="email" class="register-label">Email</label>
                    <input type="email" class="register__input" id="email" name="">
                </div>
                <div class="input-container">
                    <label for="sexo" class="register-label">Sexo</label>
                    <input type="text" class="register__input" id="sexo" name="">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label for="curp" class="register-label">CURP</label>
                    <input type="text" class="register__input" id="curp" name="">
                </div>
                <div class="input-container">
                    <label for="area" class="register-label">Area Adjunta</label>
                    <input type="text" class="register__input" id="area" name="">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label for="fecha" class="register-label">Fecha Ingreso</label>
                    <input type="text" class="register__input" id="fecha" name="">
                </div>
                <div class="input-container">
                    <label for="user" class="register-label">Usuario</label>
                    <input type="text" class="register__input" id="user" name="">
                </div>
                <div class="input-container">
                    <label for="pass" class="register-label">Contraseña</label>
                    <input type="password" class="register__input" id="pass" name="">
                </div>
            </div>
            <!-- <label for="plantel" class="register-label">Plantel</label>
            <input type="text" class="register__input" id="plantel" name=""> -->

            <input type="submit" value="Enviar Datos" class="register__input--submit">
        </form>
        <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="register__buttons--1">Panel de Control</a>
            <a href="#" class="register__buttons--2">Cerrar Sesión</a>
        </div>

    </section>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>


    </footer>
</body>

</html>