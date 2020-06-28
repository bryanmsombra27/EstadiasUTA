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
            <div class="header__text-container">
                <h1 class="title">Calificaciones Capturadas del Grupo</h1>
            </div>
    </header>

    <h3 class="title-teacher title-center title-bottom"><span class="profesor-title">Profesor:</span> Jesus Alejandro
        Alvarez
        Galeana</h3>

    <section class="table-container container">
        <table class="table__size">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__head">Nivel</th>
                    <th class="table__head">Carrera</th>
                    <th class="table__head">Cuatrimestre</th>
                    <th class="table__head">Materia</th>
                    <th class="table__head">Grupo</th>
                    <th class="table__head">1ER Parcial</th>
                    <th class="table__head">2DO Parcial</th>
                    <th class="table__head">3ER Parcial</th>
                </tr>
            </thead>
            <tbody class="table__content">
                <tr class="table__row2">
                    <td class="table__item">Tecnico Superior Universitario</td>
                    <td class="table__item">18TICSI</td>
                    <td class="table__item">Cuarto</td>
                    <td class="table__item">Principios de IOT</td>
                    <td class="table__item">4-A</td>
                    <td class="table__item--actions">
                        <a href="javascript:ventanaSecundaria('evaluar.php')" class="table__item--evaluate">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-2">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-3">Evaluar</a>
                    </td>
                </tr>

                <tr class="table__row2">
                    <td class="table__item">Tecnico Superior Universitario</td>
                    <td class="table__item">18TICSI</td>
                    <td class="table__item">Primero</td>
                    <td class="table__item">Desarrollo de Habilidades de Pensamiento Logico</td>
                    <td class="table__item">1-A</td>
                    <td class="table__item--actions">
                        <a href="javascript:ventanaSecundaria('evaluar.php')" class="table__item--evaluate">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-2">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-3">Evaluar</a>
                    </td>
                </tr>

                <tr class="table__row2">
                    <td class="table__item">Ingenieria</td>
                    <td class="table__item">11ITI</td>
                    <td class="table__item">Septimo</td>
                    <td class="table__item">Optativa I Principios para IOT</td>
                    <td class="table__item">7-A</td>
                    <td class="table__item--actions">
                        <a href="javascript:ventanaSecundaria('evaluar.php')" class="table__item--evaluate">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-2">Evaluar</a>
                    </td>
                    <td class="table__item--actions">
                        <a href="#" class="table__item--evaluate parcial-3">Evaluar</a>
                    </td>
                </tr>


            </tbody>
        </table>

        <a href="../panelControlDocentes.php" class="table__button">Panel de Control</a>

    </section>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>