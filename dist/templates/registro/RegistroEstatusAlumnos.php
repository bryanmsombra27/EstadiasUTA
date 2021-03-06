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
                <h1 class="title">Registro Estatus de Alumnos</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="estatus">Estatus</label>
                    <input class="register__input" type="text" id="estatus" name="estatus">
                </div>

                <div class="input-container">
                    <label class="register-label" for="descripcion">Descripción</label>
                    <input class="register__input" type="text" id="descripcion" name="descripcion">
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