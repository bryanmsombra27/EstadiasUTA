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
                <h1 class="title">Configuración del Cuatrimestre</h1>
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
                    <label class="register-label" for="director">Cuatrimestre</label>
                    <input type="text" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="telefono">Periodo</label>
                    <input type="text" name="" id="" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Ciclo Escolar</label>
                    <select name="" id="" class="register__input">
                        <option value="2016-2017">2016-2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Inicio</label>
                    <input type="date" class="register__input">
                </div>
                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Finalización</label>
                    <input type="date" class="register__input">
                </div>
            </div>
            <h3 class="title title-center title-margin-bottom">Asignación de Fechas para Captura de calificaciones
                Parciales</h3>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Inicio Captura Primer Parcial</label>
                    <input type="date" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Finalización de Captura Primer Parcial</label>
                    <input type="date" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Inicio Captura Segundo Parcial</label>
                    <input type="date" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Finalización de Captura Segundo
                        Parcial</label>
                    <input type="date" class="register__input">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Inicio Captura Tercer Parcial</label>
                    <input type="date" class="register__input">
                </div>

                <div class="input-container">
                    <label class="register-label" for="plantel">Fecha de Finalización de Captura Tercer
                        Parcial</label>
                    <input type="date" class="register__input">
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