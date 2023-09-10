<?php

$conexion = mysqli_connect("localhost","root","","registro");

if($conexion){
    echo 'Se conecto manito';
}else{
    echo 'No se conecto :(';
};

?>