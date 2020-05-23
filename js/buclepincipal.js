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
    // llamamos actualizar y dibujar
    buclePrincipal.actualizar(registroTemporal);
    buclePrincipal.dibujar();
    // creamos una condicional para realizar un contador de APS y FPS
    if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
      buclePrincipal.ultimoRegistro = registroTemporal;
      console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
      buclePrincipal.aps = 0;
      buclePrincipal.fps = 0;
    }
  },
  // funcion para detener el juego
  detener: function(){},
  // función para actualizar el juego, esto se va a realizar 60 veces por segyndo
  actualizar: function(registroTemporal){
    teclado.reiniciar();
    mando.actualizar();
    buclePrincipal.aps++;
  },
  // función para dibujar el juego, esto se va a realizar 60 veces por segyndo
  dibujar: function(registroTemporal){
    buclePrincipal.fps++;
  }
};