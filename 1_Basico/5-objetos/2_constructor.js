/*
  Para crear una funcion constructora de un objeto
  hablamos de crear un template que nos ayuda a poder instanciar
  cada objeto de la misma manera y simplemente utilizamos funciones constructoras
*/

function auto (marca, modelo, annio) {
  // Es importante utilizar this para poder generar las propiedades dentro de nuestro objeto
  this.marca = marca
  this.modelo = modelo
  this.annio = annio
  this.detalle = function () {
    console.log(`Auto ${this.modelo} ${this.annio}`) 
  }
}

// Con new podemos generar una nueva instancia de nuestra funcion constructora
var auto = new auto('Toyota', 'Corolla', 2020)

console.log(auto.marca)
auto.detalle()