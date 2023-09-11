<?php

include 'conexion.php';

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Correo = $_POST['Correo_Electrónico'];
$Usuario = $_POST['Usuario'];
$Contrasena = $_POST['Contrasena'];

$query = "INSERT INTO usuarios(Nombre, Apellido, Correo_Electrónico, Usuario, Contrasena)
            values ('$Nombre', '$Apellido', '$Correo', '$Usuario', '$Contrasena')";

$Ejecutar = mysqli_query($conexion, $query);

if ($Ejecutar){
    echo '
    <script>
    alert("Nice");
    window.location = "http://localhost/Antheon/Index.php";
    </script>';
}

?>