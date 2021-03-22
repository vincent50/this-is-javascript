/*
  Un objeto en javascript es un conjunto de dato y/o funciones
  que se denominan propiedades y metodos cuando se encuentran
  dentro de un objeto.

*/

// Si inicializamos una variable de la siguiente manera
var object = {}
// automaticamente tenemos un objeto

console.log(typeof(object))

// Una forma sencilla de entender un objeto, es tomando un objeto del mundo fisico

var auto = {
  marca: 'Toyota', // propiedad
  modelo: 'Corolla',
  annio: 2020,
  detalleDelAuto: function () { // metodo
    // this, actualmente hace referencia a nuestro objeto auto == this
    // pero esto solo es dentro de nuestra funcion
    console.log(`Auto ${this.modelo} ${this.annio}`) 
    // Si utilizamos this fuera de nuestro metodo
    // el valor de este es {}
  }
}

// Para acceder a una de sus propiedades utilizamos la siguiente sintaxis
console.log(auto.marca) // Toyota
// Esto se debe a que nuestro objeto funciona por clave: valor

// Para utilizar una funcion es similar a una propiedad
auto.detalleDelAuto() // Auto Corolla 2020
// Con esto accedemos a la funcion dentro de nuestro objeto
