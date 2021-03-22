// Podemos craer objetos sin especificar valores redundantes
// esto es util al generar objetos con muchas propiedades

let name = 'Vincet'
let age = 30

// ES5
let obj = { name: name, age: age }

// ES6
let obj2 = { name, age }
console.log(obj2)
