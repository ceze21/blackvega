<?php
include("connect.php");

//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inesperado en la conexion de la base de datos");

//generamos la consulta
$sql = "DELETE FROM tareas WHERE id = ".$_POST['id'];
mysqli_query($conexion,$sql) or die("Error en la consulta de inserción $sql");
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
