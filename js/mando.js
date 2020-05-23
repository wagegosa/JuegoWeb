var mando = {
  objeto: null,
  eventosDisponibles: 'omgamepadconnected' in window,
  conectado: false,
  iniciar: function () {
    if (mando.eventosDisponibles) {
      window.addEventListener("gamepadconnected", mando.conectar);
      window.addEventListener("ganepaddisconneted", mando.desconectar);
    }else{
      mando.actualizar();
    }
  },
  conectar: function (evento) {
    mando.objeto = evento.gamepad;
    mando.identificar();
  },
  desconectar: function(evento){
    console.log("El mando ha sido desconectado del indice %d: %s.", evento.gamepad.index, evento.gamepad.id);
  },
  actualizar: function(){
    if(!mando.eventosDisponibles){
      mandos = null;
      try {
        mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        mando.objeto = mandos[0];
        if(!mando.conectado){
          mando.conectado = true;
          mando.identificar();
        }
      } catch (error) {
        console.log("Se ha presentado el siguiente error: " + error.message);
      }
    }if(!mando.objeto){
      return;
    }if (mando.botonPulsado(mando.objeto.buttons[0])) {
      console.log("Mando: A");
    }
  },
  botonPulsado: function(){
    if (typeof(boton) == "object") {
        return boton.pressed;
    } else {
        return boton == 1.0;
    }
  },
  identificar: function(){
      console.log("Mando conectado en el indice %d: %s. %d botonos, %d ejes.", mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
      
  }
}