<?php
session_start();
// AQUI VA TODO EL HTML
if (isset($_SESSION['user'])) : ?>


    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="../css/PanelControlEscolares.css">
        <script src="../js/dropdown.js" defer></script>
    </head>

    <body>
        <header class="header">
            <div class="header-container">
                <div class="header__img-container">
                    <a href="#">
                        <img src="../img/uta.png" alt="LogoUTA">
                    </a>
                </div>
                <div class="header__text-container">
                    <h1 class="title">Panel de Control Docentes</h1>
                </div>
        </header>
        <main class="dropdown-container container">

            <div class="menu-1">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/calification.svg" alt="Calificaciones" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Calificaciones </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-0">
                    <li class="dropdown__content--element"> <a href="#"> Captura de Calificaciones </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Consulta de Calificaciones </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Consulta Calificaciones Coordinación</a></li>
                </ul>
            </div>



            <div class="menu-4">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/tutorado.svg" alt="Tutorados" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Tutorados </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-1">
                    <li class="dropdown__content--element"> <a href="docentes/GruposTutorados.php"> Consultar Kardex
                            Grupo(s) Tutorado(s)
                        </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Consultar
                            Calificaciones Parciales Grupo(s) Tutorado(s) Cuatrimestre Vigente </a></li>

                </ul>
            </div>

            <div class="menu-5">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/fail.svg" alt="Extraordinarios" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Extraordinarios </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-2">
                    <li class="dropdown__content--element"> <a href="docentes/CalificacionesExtraordinarias.php"> Captura
                            de Examenes
                            Extraordinarios</a></li>
                    <li class="dropdown__content--element"> <a href="modulos/AsignacionMaterias.php"> Formato de
                            Extraordinario </a>
                    </li>

                </ul>
            </div>

            <div class="menu-2">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/preparation.svg" alt="Preparacion" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Configuración de cuenta </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-3">
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/RegistroGeneraciones.php">Cambio Clave de Acceso </a></li>
                </ul>
            </div>
            <div class="flex">
                <a href="http://localhost/backendsiacc/controllers/cerrarDocentes.php" class="docentes__button" id="cerrar-sesion">Cerrar
                    Sesión</a>
            </div>
        </main>


        <footer class="footer">
            <div class="container">
                <p>Desarrollado por: Divelopers 2020 &copy;</p>
            </div>
        </footer>



    </body>

    </html>


<?php else :

    header("location:http://localhost/InterfacesParaEstadias/koso.php"); //AQUI VA DONDE REDIRECCIONAS SI NO TIENES SESION ACTIVA, LOGIN X EJEMPLO O REGISTRO
    exit;
endif;
?>