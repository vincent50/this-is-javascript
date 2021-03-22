/*
  A pesar de que podemos recorrer nuestros arreglos con for
	El propio objeto Array ya contiene metodos propios que hacen
	esta tarea de forma mas optima y facil de leer
	estos son:

	- filter
	- map
	- find
	- for each
	- some
	- splice
*/

var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 }
]

// ======================== filer ============================================ //

// filter: nos permite generar un nuevo array con la informacion filtrada
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500 // en este caso, los articulos menores a 500 pesos
})

console.log(articulosFiltrados) // [ { nombre: '⌨️', precio: 100 }, { nombre: '🖱', precio: 70 } ]



// ======================== map ============================================ //

// Método Map
// map: permite generar un nuevo array con la informacion que necesitamos
// a diferencia de filter, este permite escoger informacion especifica o
// poder modificar la informacion de una propiedad.
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre
})

console.log(nombreArticulos) // (5) ["📱", "💻", "🖥", "⌨️", "🚗"]


// find: nos permite encontrar un objeto dentro de nuestro array
// la diferencia entre find y filter es que filter obtiene todos los
// casos posibles y find solo devuelve el primer caso encontrado.
var firstOption = articulos.find(function(articulo){
  return articulo.nombre === '💻'
})

console.log(firstOption) 

// ======================== for each ============================================ //

// for each permite recorrer cada uno de los datos dentro de nuestra estructura

articulos.forEach(function(articulo) {
  console.log(articulo.nombre)
})


// ======================== some ============================================ //

// Permite validar si existe algun elemento con una condicion especifica
// a diferencia de los ejemplos anteriores este devuelve un booleano
var existe = articulos.some(function (articulo) {
  return articulo.precio <= 300
})

// ======================== splice ============================================ //

// splice: nos permite eliminar elementos desde una cierta posicion y si es necesario
// nos ayuda a ingresar nuevos datos en esas posiciones

var nuevoArray = articulos.splice(2, 1,{nombre: '📠', precio: 2000})
console.log(nuevoArray) // [ { nombre: '🖥', precio: 2000 } ]
console.log(articulos)
// [ { nombre: '📱', precio: 1000 }, { nombre: '💻', precio: 1500 }, { nombre: '📠', precio: 2000 }, { nombre: '⌨️', precio: 100 }, { nombre: '🖱', precio: 70 }, { nombre: '🚗', precio: 30000 }]

// En este ejemplo podemos observar dos cosas
// 1. obtenemos el valor { nombre: '🖥', precio: 2000 } el cual esta en la posicion [2] del array "articulos"
// 2. a la vez este lo elimina y lo reemplaza por {nombre: '📠', precio: 2000}

// En caso de solo eliminar, no debemos especificar el tercer argumento en el metodo splice