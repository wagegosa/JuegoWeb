document.addEventListener('DOMContentLoaded', function () {
  inicio.iniciarJuego();
}, false);

// Control + f5, sirve para recargar pagina pero limpiando la cache 
var inicio = {
  iniciarJuego: function () {
    console.log("Juego iniciado");
    ajax.cargarArchivo("mapas/sinnombre.json");
    teclado.go();
    dimensiones.iniciar();
    mando.iniciar();
    //var r = new Rectangulo(0, 0, 100, 100);
    // var r2 = new Rectangulo(100, 0, 100, 100);
    inicio.recargarTiles();
    buclePrincipal.iterar();
  },
  recargarTiles: function () {
    document.getElementById("juego").innerHTML = "";
    for (var y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
      for (var x = 0; x < dimensiones.obtenerTilesHorizontalez(); x++) {
        var r = new Rectangulo((x * dimensiones.ladoTiles) , (y * dimensiones.ladoTiles), dimensiones.ladoTiles, dimensiones.ladoTiles);
        // var r = new Rectangulo(x * dimensiones.ladoTiles(), y * dimensiones.ladoTiles(), dimensiones.ladoTiles(), dimensiones.ladoTiles());
      }
    }
  }
};