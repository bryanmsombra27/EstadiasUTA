<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/Tablas.css">
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

    <div class="table-container container">
        <table class="table__size">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__head">Matricula</th>
                    <th class="table__head">Nombre</th>
                    <th class="table__head">1ER Parcial</th>
                    <th class="table__head">Acciones</th>
                </tr>
            </thead>
            <tbody class="table__content">
                <tr class="table__row2">
                    <td class="table__item">201804004</td>
                    <td class="table__item">Alvarado Sandoval Alicia</td>
                    <td class="table__item">8.5</td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>
                <tr class="table__row2">
                    <td class="table__item">201804005</td>
                    <td class="table__item">Amaro Solano Flor Adriana</td>
                    <td class="table__item">9.1</td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>

                <tr class="table__row2">
                    <td class="table__item">201804007</td>
                    <td class="table__item">Antunez Rodriguez Alejandra</td>
                    <td class="table__item">8.5</td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>

            </tbody>
        </table>
        <div class="flex-2">
            <a href="../panelControlEscolares.php" class="table__button">Panel de Control</a>
            <a href="../panelControlEscolares.php" class="table__button imprimir-acta">Imprimir Acta</a>

        </div>
    </div>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>