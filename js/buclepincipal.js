// nemespace= Espacio de nombre
// main loop = bucle principal
// aps = Actualización por segundo
// fps = frames por segundos
// callback

var buclePrincipal = {
  idEjecución: null,
  ultimoRegistro: 0,
  aps: 0,
  fps: 0,
  // creamos una función para repetir  o iterar
  iterar: function(registroTemporal){
    // llammos el atributo idEjecución y luego solicitamos el cuadro de animación 
    // la función window.requestAnimationFrame vuelve y llama la función iterar con el fin de siempres estar actualizado en la parte de animación
    buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);
  },
  // funcion para detener el juego
  detener: function(){},
  // función para actualizar el juego, esto se va a realizar 60 veces por segyndo
  actualizar: function(registroTemporal){
    buclePrincipal.aps++;
  },
  // función para dibujar el juego, esto se va a realizar 60 veces por segyndo
  dibujar: function(registroTemporal){
    buclePrincipal.fps++;
  }
};