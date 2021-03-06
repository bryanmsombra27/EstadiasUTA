<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/registros.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="../../js/registros.js" defer type="module"></script>

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
                <h1 class="title">Evaluación Primer Parcial</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="periodo">Periodo</label>
                    <input class="register__input" type="text" id="periodo" name="periodo">
                </div>

                <div class="input-container">
                    <label class="register-label" for="cuatrimestre">Cuatrimestre</label>
                    <input class="register__input" type="text" id="cuatrimestre" name="cuatrimeste">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="grupo">Grupo</label>
                    <input class="register__input" type="text" name="grupo" id="grupo">
                </div>
                <div class="input-container">
                    <label class="register-label" for="materia">Materia</label>
                    <input class="register__input" type="text" name="materia" id="materia">
                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="faltas">Número de Faltas</label>
                    <input class="register__input" type="text" name="faltas" id="faltas">
                </div>

                <div class="input-container">
                    <label class="register-label" for="calificacion">Calificación Primer Parcial</label>
                    <input class="register__input" type="number" name="calificacion" id="calificacion">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="matricula">Matricula del Alumno: Bryan Jair Villanueva
                        ochoa</label>
                    <input class="register__input" type="text" name="matricula" id="matricula">
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