<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/login.css">
    <script src="../../js/escolares.js" defer></script>
</head>

<body>
    <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
            <source src="../../img/fondo.mp4" type="video/mp4">
            Your browser is not supported!
        </video>
    </div>
    <section class="section-form">
        <div class="form" id="login-form">
            <form action="#">
                <h2 class="form__title">Inicia Sesión</h2>
                <div class="form__caja-input" id="verify1">

                    <input type="text" placeholder="Usuario" class="form__caja-input--input-1" name="email" id="email">
                </div>

                <div class="caja-input" id="verify2">

                    <input type="password" placeholder="Contraseña" class="form__caja-input--input-2" id="pass" name="pass">
                </div>

                <div class="caja-input">
                    <input type="submit" value="Enviar" class="form__caja-input--input-3">
                </div>
                <a href="#" class="form__password">Olvido la contraseña</a>
                <a href="../../../index.php" class="form__password">Regresar al Panel de Control</a>
            </form>
        </div>
    </section>


</body>

</html>