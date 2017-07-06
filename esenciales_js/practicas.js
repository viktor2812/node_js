
var Objeto = function () {

}

Objeto.prototype.Saludar = function (msg) {
  console.log("Saludo:",msg)
}
var o = new Objeto()
o.Saludar("Hola Mundo")
