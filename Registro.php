<?php

include 'conexion.php';

$nombre = $_POST('Nombre')
$Apellido = $_POST('Apellido')
$Correo = $_POST('Correo')
$Usuario = $_POST('Usuario')
$Contraena = $_POST('Contraena')

$query = "INSERT INTO Usuario(Nombre, Apellido, Correo, Usuario, Contrasena)
            values ('$nombre', '$Apellido', '$Correo', '$Usuario', '$Contraena')";

$Ejecutar = mysqli_query($conexion, $query);

?>