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

    <script src="../../js/alumnosPrueba.js" defer type="module"></script>
</head>

<body>
    <header class="header">
        <div class="header-container">
            <div class="header__img-container">
                <a href="#">
                    <img src="../../img/uta.png" alt="LogoUTA">
                </a>
            </div>
            <div class="header__text-container center">
                <h1 class="">Alumnos</h1>
            </div>
    </header>

    <section class="table-container container" id="table__button">
        <table class="table__size" id="datatable">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__head">Matricula</th>
                    <th class="table__head">Apellido Paterno</th>
                    <th class="table__head">Apellido Materno</th>
                    <th class="table__head">Nombre(s)</th>
                    <th class="table__head">1ER Parcial</th>
                    <th class="table__head">2DO Parcial</th>
                    <th class="table__head">3ER Parcial</th>
                </tr>
            </thead>
            <tbody class="table__content" id="tabla">
                <!-- <div class="lds-dual-ring"></div> -->

                <!-- <tr class="table__row2">
                    <td class="table__item">201804004</td>
                    <td class="table__item">Alvarado</td>
                    <td class="table__item">Sandoval</td>
                    <td class="table__item">Alicia</td>
                    <td class="table__item--actions">
                        <a href="javascript:ventanaSecundaria('evaluar.html')" class="table__item--evaluate">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-2">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-3">Evaluar</a>
                    </td>
                </tr>   -->
            </tbody>
        </table>
        <!-- <a href="../panelControlDocentes.html" class="table__button">Panel de Control</a> -->
    </section>
    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Divelopers 2020 &copy;</p>
        </div>
    </footer>
    <script>
        function ventanaSecundaria(URL) {
            window.open(URL, "ventana1", "width=600,height=600", "scrollbars=NO");
        }
    </script>

    <script src="../../js/Jquery.js"></script>
    <script type="text/javascript" src="../../js/dataTables.js"></script>
</body>

</html>