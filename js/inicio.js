document.addEventListener('DOMContentLoaded', function(){
  inicio.iniciarJuego();
}, false);

// Control + f5, sirve para recargar pagina pero limpiando la cache 

var inicio ={
  iniciarJuego: function(){
    console.log("Juego iniciado");
    buclePrincipal.iterar();
  }
}