<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="http://localhost/Antheon/Styles/Index_style.css">
    <link rel="stylesheet" href="http://localhost/Antheon/Styles/Login_style.css">
    <title>Antheon</title>
</head>
<body>
    <nav class="menu">
        <div>
            <a href="/Index.html">
                <img src="http://localhost/Antheon/img/floral-logo-a-02-412-2048x1366.png" alt="">
            </a>
        </div>
        <ul>
            <li>
                <a href="/Antheon/Index.html">Inicio</a>
            </li>
            <li>
                <a href="/Antheon/Galeria.html">Galeria</a>
            </li>
            <li>
                <a href="../Flor del Dia.html">Flor del Dia</a>
            </li>
            <li>
                <a href="/Antheon/Flores Peligrosas.html">Flores Peligrosas</a>
            </li>
        </ul>
    </nav>
    <main>
            <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

                <!--Formulario de Login y registro-->
                <div class="contenedor__login-register">
                    <!--Login-->
                    <form action="" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electronico">
                        <input type="password" placeholder="Contraseña">
                        <button>Entrar</button>
                    </form>

                    <!--Register-->
                    <form action="http://localhost/Antheon/Registro.php" method="POST" class="formulario__register">
                        <h2>Regístrarse</h2>
                        <input type="text" placeholder="Nombre" name="Nombre">
                        <input type="text" placeholder="Apellido" name="Apellido">
                        <input type="text" placeholder="Correo Electronico" name="Correo_Electrónico">
                        <input type="text" placeholder="Usuario" name="Usuario">
                        <input type="password" placeholder="Contraseña" name="Contrasena">
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>
        </main>
        <script src="http://localhost/Antheon/Java/login.js"></script>
</body>
</html>