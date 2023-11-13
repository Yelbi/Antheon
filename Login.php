<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="img/Logo mini.png" />
    <link rel="stylesheet" href="Styles/Index_style.css">
    <link rel="stylesheet" href="Styles/Login_style.css">
    <title>Anthesis</title>
</head>
<body>
    <nav class="menu">
    <div class="alpha">
        <ul>
            <li>
                <a href="/Index.html">Inicio</a>
            </li>
            <li>
                <a href="/Galeria.html">Galeria</a>
            </li>
        </ul>
    </div>
            <div class="logo">
                <a href="/Index.html">
                    <img src="img/Logo.png" alt="">
                </a>
            </div>
        <div class="omega">
        <ul>
            <li>
                <a href="/Flor del Dia.html">Flor del Dia</a>
            </li>
            <li>
                <a href="/Flores Peligrosas.html">Flores Peligrosas</a>
            </li>
        </ul>
    </div>
    </nav>
    <main class="backmain">
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

                <div class="contenedor__login-register">
                
                    <form action="/Entrar.php" method="POST" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input class="colorletrainput" type="text" placeholder="Correo Electronico" name="Correo_Electrónico">
                        <input class="colorletrainput" type="password" placeholder="Contraseña" name="Contrasena">
                        <button>Entrar</button>
                    </form>

                    <form action="/Registro.php" method="POST" class="formulario__register">
                        <h2>Regístrarse</h2>
                        <input class="colorletrainput" type="text" placeholder="Nombre" name="Nombre">
                        <input class="colorletrainput" type="text" placeholder="Apellido" name="Apellido">
                        <input class="colorletrainput" type="text" placeholder="Correo Electronico" name="Correo_Electrónico">
                        <input class="colorletrainput" type="text" placeholder="Usuario" name="Usuario">
                        <input class="colorletrainput" type="password" placeholder="Contraseña" name="Contrasena">
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>
        </main>
        <script src="Java/login.js"></script>
</body>
</html>