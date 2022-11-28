<?php
include("connect.php");

//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inesperado en la conexion de la base de datos");

//generamos la consulta
$sql = "SELECT * FROM tareas";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$tareas = array(); //creamos un array

while($fila = mysqli_fetch_array($result)) 
{
    $tareas[] = array('id' => $fila['id'], 'detalle' => $fila['detalle'], 'id_categoria' => $fila['id_categoria']);
}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");


//Creamos el JSON
$json_string = json_encode($tareas);
echo $json_string;
?>