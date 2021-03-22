// Para el siguiente ejemplo:

var fruits = ['manzana', 'platano', 'frutilla']

// ================= METODOS ======================== //


// length: obtener el largo del array
console.log( fruits.length ) // 3


// push: agrega un elemento al final del array
fruits.push('uvas')
console.log(fruits) // ['manzana', 'platano', 'frutilla', 'uvas']


// pop: obtiene y elimina el ultimo elemento del array
var last = fruits.pop()
console.log(last) // uvas
console.log(fruits) // ['manzana', 'platano', 'frutilla']


// unshift: agrega un elemento al inicio del array
fruits.unshift('berenjena')
console.log(fruits) // ['berenjena', 'manzana', 'platano', 'frutilla']


// shift: obtiene y elimina el primer elemento
var first = fruits.shift()
console.log(last) // shift
console.log(fruits) // ['manzana', 'platano', 'frutilla']


// indexOf: obtiene la posicion del elemento en el array
var index = fruits.indexOf('platano')
console.log(index) // 1
// En caso de que no existe en el array, como resultado nos devuelve -1
var index = fruits.indexOf('cereza')
console.log(index) // -1
// Esto nos ayuda para poder validar si existe algun elemento en nuestro array