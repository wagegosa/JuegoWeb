<?php  
$fecha = new DateTime();
$fuentesJavaScript = array("js/ajax.js", "js/teclado.js", "js/rectangulo.js", "js/mando.js", "js/buclepincipal.js", "js/dimensiones.js", "js/inicio.js");
foreach ($fuentesJavaScript as $fuente) {
  echo "<script src='". $fuente ."?". $fecha->getTimestamp() ."'></script><br>";
  }
?>