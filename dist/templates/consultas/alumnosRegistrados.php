<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">

    <link rel="stylesheet" href="../../css/spiners.css">

    <link rel="stylesheet" href="../../css/registros.css">
    <link rel="stylesheet" href="../../css/Tablas.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    <script src="../../js/alumnosPrueba.js" defer type="module"></script>
</head>

<body>
    <!-- content__extra-size -->
    <header class="header ">
        <div class="header-container">
            <div class="header__img-container">
                <a href="#">
                    <img src="../../img/uta.png" alt="LogoUTA">
                </a>
            </div>
            <div class="header__text-container">
                <h1 class="title">2758 Alumnos Registrados</h1>
            </div>
    </header>

    <section class="table-container container" id="table__button">


        <!-- table__extra-size -->
        <table class=" table__size " id="datatable">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__head">Matricula</th>
                    <th class="table__head">Apellido Paterno</th>
                    <th class="table__head">Apellido Materno</th>
                    <th class="table__head">Nombre(s)</th>
                    <th class="table__head">Dirección</th>
                    <!-- <th class="table__head">Estado</th> -->
                    <!-- <th class="table__head">Municipio</th> -->
                    <!-- <th class="table__head">Esc Procedencia</th> -->
                    <!-- <th class="table__head">CURP</th> -->
                    <th class="table__head">Telefono</th>
                    <!-- <th class="table__head">Email</th> -->
                    <th class="table__head">Carrera</th>
                    <th class="table__head">Acciones</th>
                </tr>
            </thead>
            <tbody class="table__content" id="tabla">
                <!-- <tr class="table__row2">
                    <td class="table__item">201303003</td>
                    <td class="table__item">Hernandez</td>
                    <td class="table__item">Campos</td>
                    <td class="table__item">Jacob</td>
                    <td class="table__item">Jorullo 2</td>
                     <td class="table__item">Guerrero</td> 
                     <td class="table__item">Acapulco</td> 
                     <td class="table__item">Colegio de Bachilleres del Estado de Guerrero Plantel No.2</td> 
                     <td class="table__item">HECJ921016HGRRMC01</td> 
                    <td class="table__item">7441318445</td>
                     <td class="table__item">jaco_nesi@hotmail.com</td>
                    <td class="table__item">Mantenimiento Area Instalaciones</td>

                    <td class="table__item--actions">
                         button__extra-size 
                        <a href="#" class="table__item--modify ">Modificar</a>
                        
                        <a href="#" class="table__item--delete button__extra-size--delete">Eliminar</a>
                    </td>
                </tr> -->




            </tbody>
        </table>
        <!-- <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="table__button">Panel de Control</a>
            <a href="#" class="table__button inscribir">Registrar Alumno</a>
        </div> -->
    </section>


    <!-- Inicio POPUP -->
    <div class="popup-wrapper">
        <div class="popup">
            <div class="popup-close">X</div>
            <div class="popup-content">
                <h2>Solicitar Demo</h2>
                <form action="#" class="register__form" id="form-popup">
                    <!-- <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Clave</label>
                            <input type="text" class="register__input">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Paterno</label>
                            <input type="text" class="register__input">
                        </div>
                    </div>

                    <div class="register-field">
                        <div class="input-container">
                            <label for="clave" class="register-label">Apellido Materno</label>
                            <input type="text" class="register__input">
                        </div>

                        <div class="input-container">
                            <label for="clave" class="register-label">Nombre</label>
                            <input type="text" class="register__input">
                        </div>

                    </div> -->
                </form>
            </div>
        </div>
    </div>
    <!-- Fin POPUP -->



    <!-- content__extra-size -->
    <footer class="footer ">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>

    <script src="../../js/Jquery.js"></script>
    <script type="text/javascript" src="../../js/dataTables.js"></script>
</body>

</html>