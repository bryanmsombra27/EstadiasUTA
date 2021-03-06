<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/registros.css">
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
                <h1 class="title">9656 Alumnos Inscritos/Reinscritos</h1>
            </div>
    </header>

    <section class="table-container container">
        <form action="#" class="register__form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="numeroE">Buscar Alumno por Matricula</label>
                    <input class="register__input" type="number" id="numeroE">
                </div>
            </div>
        </form>
        <input class="register__input--submit" type="submit" value="Buscar">

        <table class="table__size hide__table">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__head">Matricula</th>
                    <th class="table__head">Nombre</th>
                    <th class="table__head">Carrera</th>
                    <th class="table__head">Acciones</th>
                </tr>
            </thead>
            <tbody class="table__content">
                <tr class="table__row2">
                    <td class="table__item">201501051</td>
                    <td class="table__item">Escudero Tapia Guadalupe </td>
                    <td class="table__item">09DNM</td>

                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>

                <tr class="table__row2">
                    <td class="table__item">201502079</td>
                    <td class="table__item">Moreno Morales Guadalupe Monserrat </td>
                    <td class="table__item">12GAS</td>

                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>
                <tr class="table__row2">
                    <td class="table__item">201501080</td>
                    <td class="table__item">Estudillo Hernandez Tanya Lizbeth </td>
                    <td class="table__item">12GAS</td>

                    <td class="table__item--actions">
                        <a href="#" class="table__item--modify">Modificar</a>
                        <a href="#" class="table__item--delete">Eliminar</a>
                    </td>
                </tr>



            </tbody>
        </table>
        <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="table__button">Panel de Control</a>
            <a href="#" class="table__button inscribir">Inscribir/Reinscribir Alumno</a>
        </div>
    </section>


    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>