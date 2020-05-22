function Rectangulo(x, y , ancho, alto){
  this.x = x;
  this.y = y;
  this.alto = alto;
  this.ancho = ancho;
  this.id = "r" + x + y;
  this.inssertarDOM();
}

Rectangulo.prototype.inssertarDOM =  function(){
  var div = '<div id="' + this.id + '"></div>';
  var html = document.getElementById("juego").innerHTML;
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);//toString convierte a un string
  document.getElementById("juego").innerHTML = html + div;
  console.log(this.id);
  document.getElementById(this.id).style.position = "absolute";
  document.getElementById(this.id).style.left = this.x + "px";
  document.getElementById(this.id).style.top = this.y + "px";
  document.getElementById(this.id).style.width = this.ancho + "px";
  document.getElementById(this.id).style.height = this.alto + "px";
  document.getElementById(this.id).style.backgroundColor = color;
}