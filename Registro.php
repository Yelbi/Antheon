<?php

include 'conexion.php';

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Correo = $_POST['Correo_Electrónico'];
$Usuario = $_POST['Usuario'];
$Contrasena = $_POST['Contrasena'];

$query = "INSERT INTO usuarios(Nombre, Apellido, Correo_Electrónico, Usuario, Contrasena)
            values ('$Nombre', '$Apellido', '$Correo', '$Usuario', '$Contrasena')";

$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Correo_Electrónico = '$Correo'");

if(mysqli_num_rows($verificar_correo) > 0){
    echo '
    <script>
    alert("Este correo ya esta puesto, LADRON");
    window.location = "http://localhost/Antheon/Login.php";
    </script>';
    exit();
}

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Usuario = '$Usuario'");

if(mysqli_num_rows($verificar_usuario) > 0){
    echo '
    <script>
    alert("Este usuario ya esta cogido, LADRON");
    window.location = "http://localhost/Antheon/Login.php";
    </script>';
    exit();
}

$Ejecutar = mysqli_query($conexion, $query);

if ($Ejecutar){
    echo '
    <script>
    alert("Nice");
    window.location = "http://localhost/Antheon/Index.php";
    </script>';
}else {
    echo '
    <script>
    alert("NO Nice");
    window.location = "http://localhost/Antheon/Login.php";
    </script>';
}

mysqli_close($conexion)

?>