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
                <h1 class="">Inscripción/Reinscripción</h1>
            </div>
    </header>

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
                    <label class="register-label" for="plantel">Modalidad</label>
                    <select name="" id="" class="register__input">
                        <option value="uta">Tecnico Superior Universitario</option>
                    </select>
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="director">Carrera</label>
                    <select name="" id="" class="register__input">
                        <option value="uta">09DNM Desarrollo de Negocios Area Mercadotecnia</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Matricula</label>

                    <div class="flex">
                        <input type="number" name="" id="" class="register__input input__query">

                        <a href="../cambios/DocentesRegistrados.php" class="input__consultar-profesor">Consultar
                            Matricula</a>
                    </div>

                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="estado">Tipo de Movimiento</label>
                    <select name="" id="" class="register__input">
                        <option value="matematicas">Seleccionar</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="cm">Cuatrimestre</label>
                    <select name="" id="" class="register__input">
                        <option value="I2017">I2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="cm">Ciclo Escolar</label>
                    <select name="" id="" class="register__input">
                        <option value="2016-2017">2016-2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="cm">Nivel</label>
                    <select name="" id="" class="register__input">
                        <option value="0">Primero</option>
                    </select>
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Turno</label>
                    <select name="" id="" class="register__input">
                        <option value="mat">Matutino</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Grupo</label>
                    <select name="" id="" class="register__input">
                        <option value="mat">Seleccionar</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Alumno ha Pagado Cuatrimestre</label>
                    <select name="" id="" class="register__input">
                        <option value="mat">Seleccionar</option>
                    </select>
                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Folio del Recibo</label>
                    <input type="number" name="" id="" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Estatus del Alumno</label>
                    <select name="" id="" class="register__input">
                        <option value="mat">Seleccionar</option>
                    </select>
                </div>
            </div>



            <input class="register__input--submit" type="submit" value="Registrar">
        </form>
        <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="register__buttons--1">Panel de control</a>
            <a href="#" class="register__buttons--2">Cerrar Sesion</a>
        </div>

    </section>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>