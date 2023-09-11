<?php

include 'conexion.php';

$Correo = $_POST['Correo_Electrónico'];
$Contrasena = $_POST['Contrasena'];

$validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Correo_Electrónico = '$Correo' and Contrasena = '$Contrasena'");

if(mysqli_num_rows($validar_login) > 0){
    header("Location: http://localhost/Antheon/Index.php");
    exit;
}else{
    echo '
    <script>
    alert("Ute no existe");
    window,location = "http://localhost/Antheon/Login.php";
    </script>';
    exit;
}

?>