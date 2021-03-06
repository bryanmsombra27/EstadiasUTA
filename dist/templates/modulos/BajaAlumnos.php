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
                <h1 class="">Baja de Alumnos</h1>
            </div>
    </header>

    <section class="container baja__container">
        <form action="#" class="register__form">
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="cm">Buscar Alumno por Matricula</label>
                    <input class="register__input" type="text" name="" id="cm">

                </div>
                <div class="input-container">
                    <label class="register-label" for="estado">Buscar Alumno por Apellidos</label>
                    <input class="register__input" type="text" name="" id="estado">
                </div>

            </div>
            <input class="register__input--submit" type="submit" value="Consultar" id="">
        </form>
        <div class="register__buttons">
            <a href="../panelControlEscolares.php" class="register__buttons--1 button_font-size">Panel de control</a>
            <a href="#" class="register__buttons--2 button_font-size">Cerrar Sesion</a>
            <!--hide__buttons-->
        </div>

        <section class="container table__minimo hide__table">
            <table class="table__size table__margintop">
                <thead class="table__header">
                    <tr class="table__row">
                        <th class="table__head">Clave</th>
                        <th class="table__head">Apellido Paterno</th>
                        <th class="table__head">Apellido Materno</th>
                        <th class="table__head">Nombre(s)</th>
                        <th class="table__head">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table__content">
                    <tr class="table__row2">
                        <td class="table__item">4</td>
                        <td class="table__item">Alvarez</td>
                        <td class="table__item">Galeana</td>
                        <td class="table__item">Jesús Alejandro</td>
                        <td class="table__item--actions">
                            <a href="#" class="table__item--modify">Modificar</a>
                            <a href="#" class="table__item--delete">Eliminar</a>
                        </td>
                    </tr>

                    <tr class="table__row2">
                        <td class="table__item">4</td>
                        <td class="table__item">Alvarez</td>
                        <td class="table__item">Galeana</td>
                        <td class="table__item">Jesús Alejandro</td>
                        <td class="table__item--actions">
                            <a href="#" class="table__item--modify">Modificar</a>
                            <a href="#" class="table__item--delete">Eliminar</a>
                        </td>
                    </tr>

                    <tr class="table__row2">
                        <td class="table__item">4</td>
                        <td class="table__item">Alvarez</td>
                        <td class="table__item">Galeana</td>
                        <td class="table__item">Jesús Alejandro</td>
                        <td class="table__item--actions">
                            <a href="#" class="table__item--modify">Modificar</a>
                            <a href="#" class="table__item--delete">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="register__buttons">
                <a href="../panelControlEscolares.php" class="table__button">Panel de Control</a>
                <a href="#" class="table__button red">Cerrar Sesion</a>
            </div>


        </section>
    </section>



    <footer class="footer">
        <div class="container">
            <p>Desarrollado por: Koso 2020 &copy;</p>
        </div>
    </footer>
</body>

</html>