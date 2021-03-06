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
                <h1 class="">Registro Docentes</h1>
            </div>
    </header>

    <section class="register-career container">
        <form action="#" class="register__form" id="register-form">
            <!-- <label class="register-label" for="numeroE">Número de empleado</label >
            <input class="register__input" type="number" id="numeroE"> -->

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="apellidoP">Apellido Paterno</label>
                    <input class="register__input" type="text" id="apellidoP" name="apellidoP" maxlength=25>
                </div>

                <div class="input-container">
                    <label class="register-label" for="apellidoM">Apellido Materno</label>
                    <input class="register__input" type="text" id="apellidoM" name="apellidoM" maxlength=25>
                </div>

                <div class="input-container">
                    <label class="register-label" for="nombre">Nombre</label>
                    <input class="register__input" type="text" name="nombre" id="nombre" maxlength=30>
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="domicilio">Domicilio</label>
                    <input class="register__input" type="text" name="domicilio" id="domicilio" maxlength=50>
                </div>
                <div class="input-container">
                    <label class="register-label" for="colonia">Colonia</label>
                    <input class="register__input" type="text" name="colonia" id="colonia">
                </div>
                <div class="input-container">
                    <label class="register-label" for="ciudad">Ciudad</label>
                    <input class="register__input" type="text" name="ciudad" id="ciudad" maxlength=50>
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="estado">Estado</label>
                    <input class="register__input" type="text" name="estado" id="estado">
                </div>
                <div class="input-container">
                    <label class="register-label" for="CP">Codigo Postal</label>
                    <input class="register__input" type="number" name="cp" id="cp">
                </div>
                <div class="input-container">
                    <label class="register-label" for="telefono">Telefono</label>
                    <input class="register__input" type="text" name="telefono" id="telefono" maxlength=30>
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="celular">Celular</label>
                    <input class="register__input" type="number" name="celular" id="cecular" maxlength=30>
                </div>

                <div class="input-container">
                    <label class="register-label" for="email">Email</label>
                    <input class="register__input" type="email" name="email" id="email" maxlength=75>
                </div>
                <div class="input-container">
                    <label class="register-label" for="sexo">Sexo</label>
                    <input class="register__input" type="text" name="sexo" id="sexo" maxlength=35>
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="rfc">RFC</label>
                    <input class="register__input" type="text" name="rfc" id="frc">
                </div>
                <div class="input-container">
                    <label class="register-label" for="CURP">CURP</label>
                    <input class="register__input" type="text" name="curp" id="curp">
                </div>
            </div>
            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="cedula">Cedula</label>
                    <input class="register__input" type="text" name="cedula" id="cedula">
                </div>
            </div>



            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="fechaIng">Fecha de Ingreso</label>
                    <input class="register__input" type="date" name="fechaIngreso" id="fecha_ing">
                </div>
                <div class="input-container">
                    <label class="register-label" for="categoria">Categoria</label>
                    <input class="register__input" type="text" name="rol" id="categoria">
                </div>
                <div class="input-container">
                    <label class="register-label" for="infoAcademica">Información Academica</label>
                    <input class="register__input" type="text" name="infacademica" id="inf_academ" maxlength=55>
                </div>
            </div>

            <div class="register-field">
                <!-- <div class="input-container">
                    <label class="register-label" for="user">Usuario</label>
                    <input class="register__input" type="text" name="" id="user">
                </div> -->
                <div class="input-container">
                    <label class="register-label" for="pass">Contraseña</label>
                    <input class="register__input" type="text" name="pass" id="pass">
                </div>

                <div class="input-container">
                    <label class="register-label" for="pass2">Confirmar Contraseña</label>
                    <input class="register__input" type="text" name="pass2" id="pass2">
                </div>
            </div>

            <div class="register-field">
                <div class="input-container">
                    <label class="register-label" for="refescuela">Plantel</label>
                    <input class="register__input" type="text" name="refescuela" id="refescuela">
                </div>
                <div class="input-container">
                    <label class="register-label" for="nivel">Nivel</label>
                    <input class="register__input" type="text" name="nivel" id="nivel">
                </div>
            </div>
            <!-- <label class="register-label" for="plantel">Plantel</labelx>
            <input class="register__input" type="text" name="" id="plantel"> -->

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