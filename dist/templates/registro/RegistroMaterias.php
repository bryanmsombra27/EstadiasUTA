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
                <h1 class="">Registro de Materias</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="ref_escuela">Plantel</label>
                    <select name="ref_escuela" id="ref_escuela" class="register__input">
                        <option value="UNIVERSIDAD TECNOLOGICA DE ACAPULCO">Universidad Tecnologica de Acapulco</option>
                    </select>
                </div>

                <div class="input-container">
                    <label class="register-label" for="refmodalidad">Modalidad</label>
                    <!-- <select name="" id="" class="register__input">
                        <option value="uta">Tecnico Superior Universitario</option>
                    </select> -->
                    <input type="text" class="register__input" id="refmodalidad" name="refmodalidad">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="ref_carrera">Carrera</label>
                    <!-- <select name="" id="" class="register__input">
                        <option value="uta">09DNM Desarrollo de Negocios Area Mercadotecnia</option>
                    </select> -->
                    <input type="text" class="register__input" id="ref_carrera" name="ref_carrera">
                </div>
                <div class="input-container">
                    <label class="register-label" for="nivel">Nivel</label>
                    <!-- <select name="" id="" class="register__input">
                        <option value="uta">Primero</option>
                    </select> -->
                    <input type="text" class="register__input" id="nivel" name="nivel">

                </div>

            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="cm">Clave de la Materia</label>
                    <input class="register__input" type="text" name="clave" id="clave">

                </div>
                <div class="input-container">
                    <label class="register-label" for="materia">Materia</label>
                    <input class="register__input" type="text" name="materia" id="materia">
                </div>

            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="horas">Numero de horas</label>
                    <input class="register__input" type="number" name="horas" id="horas">
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
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>