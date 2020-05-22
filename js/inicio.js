document.addEventListener('DOMContentLoaded', function(){
  inicio.iniciarJuego();
}, false);

// Control + f5, sirve para recargar pagina pero limpiando la cache 

var inicio ={
  iniciarJuego: function(){
    console.log("Juego iniciado");
    dimensiones.iniciar()
    var r = new Rectangulo(0, 0, 100, 100);
    var r2 = new Rectangulo(100, 0, 100, 100);
    var r3 = new Rectangulo(200, 0, 100, 100);
    buclePrincipal.iterar();

  }
}