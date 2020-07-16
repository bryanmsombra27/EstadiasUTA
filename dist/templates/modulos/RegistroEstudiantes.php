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
                <h1 class="">Registro de Estudiantes</h1>
            </div>
    </header>

    <h3 class="title title-center">Datos Escolares</h3>
    <section class="register-career container">
        <form action="#" class="register__form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="clave">Universidad</label>
                    <select name="" id="" class="register__input">
                        <option value="uta">Universidad Tecnologica de Acapulco</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="director">Carrera</label>
                    <select name="" id="" class="register__input">
                        <option value="uta">09DNM Desarrollo de Negocios Area Mercadotecnia</option>
                    </select>
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Matricula</label>
                    <input type="number" name="" id="" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Registro</label>
                    <input type="date" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Turno</label>
                    <select name="" id="" class="register__input">
                        <option value="mat">Matutino</option>
                    </select>
                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="estado">Apellido Paterno</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="estado">Apellido Materno</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="estado">Nombre(s)</label>
                    <input type="text" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Dirección</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Colonia</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Localidad</label>
                    <input type="text" class="register__input">
                </div>


            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Municipio</label>
                    <input type="number" name="" id="" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Región</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Estado</label>
                    <input type="text" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Código Postal</label>
                    <input type="number" name="" id="" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Telefono</label>
                    <input type="number" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Celular</label>
                    <input type="number" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Sexo</label>
                    <select name="" id="" class="register__input">
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="koso">koso</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Fecha de Nacimiento</label>
                    <input type="date" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Edad</label>
                    <input type="number" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Email</label>
                    <input type="email" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">CURP</label>

                    <div class="flex">
                        <input type="text" name="" id="" class="register__input input__query">

                        <a href="https://www.gob.mx/curp/" target="_blank" class="input__consultar-profesor">Consultar
                            CURP</a>
                    </div>

                </div>
            </div>

            <div class="register-field">

                <div class="input-container">
                    <label class="register-label" for="telefono">Estado Civil</label>
                    <select name="" id="" class="register__input">
                        <option value="hombre">Casado</option>
                        <option value="mujer">Divorciado</option>
                        <option value="koso">Soltero</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Lugar de Nacimiento</label>
                    <input type="email" class="register__input">
                </div>


            </div>

            <div class="flex button__margin-bottom">
                <input class="register__input--submit button__reset" type="reset" value="Borrar">
                <input class="register__input--submit" type="submit" value="Registrar">
            </div>


        </form>
        <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="register__buttons--1">Panel de control</a>
            <a href="#" class="register__buttons--2">Cerrar Sesion</a>
        </div>

    </section>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Divelopers 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>