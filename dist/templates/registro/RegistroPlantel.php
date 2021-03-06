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
                <h1 class="">Registro del Plantel</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="clave">Clave</label>
                    <input class="register__input" type="text" id="clave" name="clave">
                </div>

                <div class="input-container">
                    <label class="register-label" for="nombre">Nombre del Plantel</label>
                    <input class="register__input" type="text" id="nombre" name="nombre">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="director">Director</label>
                    <input class="register__input" type="text" name="director" id="director">
                </div>
                <div class="input-container">
                    <label class="register-label" for="direccion">Dirección</label>
                    <input class="register__input" type="text" name="direccion" id="direccion">
                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="ciudad">Ciudad</label>
                    <input class="register__input" type="text" name="ciudad" id="ciudad">
                </div>
                <div class="input-container">
                    <label class="register-label" for="estado">Estado</label>
                    <input class="register__input" type="text" name="estado" id="estado">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="telefono">Telefono</label>
                    <input class="register__input" type="text" name="telefono" id="telefono">
                </div>
                <div class="input-container">
                    <label class="register-label" for="turno">Turno</label>
                    <input class="register__input" type="number" name="turno" id="turno">
                </div>

            </div>


            <input class="register__input--submit" type="submit" value="Enviar Datos">
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