<?php
session_start();
if (isset($_SESSION['user'])) : ?>

    <!DOCTYPE php>
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
                    <h1 class="title">Panel de Control Servicios Escolares</h1>
                </div>
        </header>
        <main class="dropdown-container container">
            <div class="menu-1">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/register.svg" alt="Registro" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Registro </p>
                    </div>
                </div>
                <ul class="dropdown__content" id="content-0">
                    <li class="dropdown__content--element"> <a href="registro/RegistroPlantel.php"> Plantel </a></li>
                    <li class="dropdown__content--element"> <a href="registro/registroModalidades.php"> Modalidad </a></li>
                    <li class="dropdown__content--element"> <a href="registro/RegistroCarreras.php"> Carreras</a></li>
                    <li class="dropdown__content--element"> <a href="registro/registroNiveles.php"> Nivel de estudios </a>
                    </li>
                    <li class="dropdown__content--element"> <a href="registro/RegistroMateriasphp"> Materias </a></li>
                    <li class="dropdown__content--element"> <a href="registro/registroMotivosBajaphp"> Motivos de baja
                        </a></li>
                    <li class="dropdown__content--element"> <a href="registro/RegistroEstatusAlumnosphp"> Estatus alumnos
                        </a></li>
                    <li class="dropdown__content--element"> <a href="registro/FotografiaAlumnosphp"> Fotografia alumnos
                        </a></li>
                </ul>
            </div>

            <div class="menu-2">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/preparation.svg" alt="Preparacion" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Preparación del Cuatrimestre </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-1">
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/RegistroGeneraciones.php">
                            Generaciones </a></li>
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/RegistroCicloEscolar.php">
                            Ciclo Escolar </a></li>
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/ConfiguracionCuatrimestre.php"> Preparar Cuatrimestre</a></li>
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/ConfiguracionGrupos.php">
                            Grupos </a></li>
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/RegistroTurnos.php"> Turnos
                        </a></li>
                    <li class="dropdown__content--element"> <a href="preparacionDelCuatrimestre/CierreCuatrimestre.php">
                            Cierre Cuatrimestre </a></li>
                </ul>
            </div>

            <div class="menu-3">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/calification.svg" alt="Calificaciones" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Calificaciones </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-2">
                    <li class="dropdown__content--element"> <a href="#"> Calificaciones Parciales Grupal </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Calificaciones Parciales del Alumno </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Calificaciones finales T.S.U.</a></li>
                    <li class="dropdown__content--element"> <a href="#"> Calificaciones finales ING/LIC. </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Registro extraordinarios </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Estatus por Grupo(reprobadas) cifras </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Cambio a Calificaciones Finales </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Registro de Calificaciones Finales </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Promedio Cuatrimestral por Carrera </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Promedio General por Modularidad y Carrera </a>
                    </li>
                    <li class="dropdown__content--element"> <a href="#"> Promedio General por Carrera </a></li>
                </ul>
            </div>

            <div class="menu-4">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/personal.svg" alt="Personal" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Personal </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-3">
                    <li class="dropdown__content--element"> <a href="registro/registroDocentes.php"> Registro de Docentes
                        </a></li>
                    <li class="dropdown__content--element"> <a href="registro/registroCoordinadores.php"> Registro de
                            Coordinadores </a></li>
                    <li class="dropdown__content--element"> <a href="registro/registroPersonal.php"> Registro Personal</a>
                    </li>
                </ul>
            </div>

            <div class="menu-5">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/modules.svg" alt="Modulos" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Módulos </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-4">
                    <li class="dropdown__content--element"> <a href="modulos/RegistroEstudiantes.php"> Registro de
                            Aspirantes </a></li>
                    <li class="dropdown__content--element"> <a href="modulos/AsignacionMaterias.php"> Asignar Materias </a>
                    </li>
                    <li class="dropdown__content--element"> <a href="modulos/BajaAlumnos.php"> Bajas</a></li>
                    <li class="dropdown__content--element"> <a href="#"> Reingreso </a></li>
                    <li class="dropdown__content--element"> <a href="modulos/InscripcionReinscripcion.php">
                            INSCRIPCIÓN/REINSCRIPCIÓN </a></li>

                </ul>
            </div>

            <div class="menu-6">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/change.svg" alt="Cambios" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Cambios </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-5">
                    <li class="dropdown__content--element"> <a href="cambios/PersonalRegistrado.php"> Personal </a></li>
                    <li class="dropdown__content--element"> <a href="cambios/DocentesRegistrados.php"> Docentes </a></li>
                    <li class="dropdown__content--element"> <a href="cambios/SeleccionMaterias.php"> Materias</a></li>
                    <li class="dropdown__content--element"> <a href="cambios/CarrerasRegistradas.php"> Carreras </a></li>
                    <li class="dropdown__content--element"> <a href="cambios/SeleccionCargaMateria.php"> Asignación de
                            Materias </a></li>
                    <li class="dropdown__content--element"> <a href="cambios/SeleccionGrupos.php"> Datos de Grupos
                            (Cuatrimestre) </a></li>

                </ul>
            </div>

            <div class="menu-7">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/query.svg" alt="Consultas" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Consultas </p>
                    </div>
                </div>

                <ul class="dropdown__content" id="content-6">
                    <li class="dropdown__content--element"> <a href="consultas/alumnosRegistrados.php"> Alumnos Registrados
                        </a></li>
                    <li class="dropdown__content--element"> <a href="consultas/AlumnosInscritosRegistrados.php"> Alumnos
                            Inscritos/Registrados </a></li>
                    <li class="dropdown__content--element"> <a href="cambios/SeleccionGrupos.php"> Grupos Registrados</a>
                    </li>
                    <li class="dropdown__content--element"> <a href="#"> Carga Academica </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Bajas Registradas </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Reprobación </a></li>

                </ul>
            </div>

            <div class="menu-8">
                <div class="dropdown__menu">
                    <a href="#">
                        <img src="../img/query2.svg" alt="Otras" class="trigger"></a>
                    <div class="card-title">
                        <p class="drop">Más Consultas </p>
                    </div>
                </div>
                <!-- pendiente -->
                <ul class="dropdown__content" id="content-7">
                    <li class="dropdown__content--element"> <a href="#"> Verificación de Materias </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Cantidad de Alumnos Inscritos por Grupo </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Concentrado de Calificaciones Finales</a></li>
                    <li class="dropdown__content--element"> <a href="#"> Concentrado de Calificaciones Finales Totales </a>
                    </li>
                    <li class="dropdown__content--element"> <a href="#"> Concentrado de Calificaciones Finales por
                            Generación
                        </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Reporte para Computo </a></li>
                    <li class="dropdown__content--element"> <a href="#"> Reporte para IMSS Alumnos </a></li>
                </ul>
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <p>Desarrollado por: Koso 2020 &copy;</p>
            </div>
        </footer>
        <a href=""></a>

    </body>

    </html>

<?php
else :
    header("location:http://localhost/InterfacesParaEstadias/koso.php"); //AQUI VA DONDE REDIRECCIONAS SI NO TIENES SESION ACTIVA, LOGIN X EJEMPLO O REGISTRO
    exit;
endif;

?>