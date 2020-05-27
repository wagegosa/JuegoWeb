var ajax = {
  cargarArchivo: function(ruta){
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function(){
      /**
      * Estado / Constante      |   Descripción
      * 0 / Uniset              |   No inicia.
      * 1 / Opened              |   Conectado al servidor.
      * 2 / Headers             |   Petición recibida.
      * 3 / Loading             |   Procesando Petición.
      * 4 / Done                |   Petición finalizada.
      */
      if(peticion.readyState == XMLHttpRequest.DONE){
        if(peticion.status == 200){
          console.log(JSON.parse(peticion.responseText));
        }else if(peticion.status ==  400){
          console.log("Error pagina 404");
        }else{
          console.log("Resultado inesperado.");
        }
      }
    };
    peticion.open("GET", ruta, true);
    peticion.send();
  }
}