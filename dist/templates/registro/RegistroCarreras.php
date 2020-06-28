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
                <h1 class="">Registro de Carreras</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="clave">Clave Carrera</label>
                    <input class="register__input" type="number" id="clave" name="clave">
                </div>

                <div class="input-container">
                    <label class="register-label" for="plan">Plan</label>
                    <input class="register__input" type="text" id="plan" name="plan">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="carrera">Carrera</label>
                    <input class="register__input" type="text" id="carrera" name="carrera">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="num_materias">Numero de Materias Correspondientes</label>
                    <input class="register__input" type="number" name="num_materias" id="num_materias">
                </div>
                <div class="input-container">
                    <label class="register-label" for="ref_escuela">Universidad</label>
                    <select name="ref_escuela" id="ref_escuela" class="register__input">
                        <option value="UNIVERSIDAD TECNOLOGICA DE ACAPULCO">Universidad Tecnológica de Acapulco</option>
                    </select>
                </div>
            </div>
            <!-- <label class="register-label" for="plantel">Plantel</labelx>
            <input class="register__input" type="text" name="" id="plantel"> -->

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