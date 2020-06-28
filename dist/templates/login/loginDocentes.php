<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/loginDocentes.css">
    <script src="../../js/escolares.js" defer></script>
</head>

<body>
    <div class="login-container">

        <div class="login">
            <h2>Inicia Sesión Docente</h2>
            <form action="#" class="form" id="login-form">
                <div class="grupo-input" id="verify1">
                    <input type="email" class="grupo-input__campoUser" name="email" id="email" autocomplete="off">
                    <span>Usuario: </span>
                    <!-- <small class="form-error">Campo requerido</small> -->
                </div>

                <div class="grupo-input" id="verify2">
                    <input type="password" class="grupo-input__campoPassword" name="pass" id="pass" autocomplete="off">
                    <span>Contraseña: </span>
                </div>

                <div class="grupo-input">
                    <input type="submit" value="Enviar" class="grupo-input__campoSubmit">
                </div>
            </form>
            <a href="">¿Olvido su Contraseña? <span>Click Aquí</span></a> <br>
            <a href="../../../index.php" class="ancla">Regresar al Panel de Control</a>
        </div>
    </div>

</body>

</html>