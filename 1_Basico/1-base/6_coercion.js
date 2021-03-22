/*
  Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
  Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
  Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/

// Coerción implícita

var a = 4 + "7" // con el operador + se toma como una concatenacion
console.log(typeof(a)) // string (47)

var b = 4 * "7" // con el operador * se toma como una operacion aritmetica
console.log(typeof(b)) // number


// Coerción explicita

var a = 20

var c = String(a)
console.log(typeof(a)) // string

var d = Number(c)
console.log(typeof(c)) // number

var e = parseInt(c)
console.log(typeof(e)) // number

// La diferencia entre Number y parseInt es que si utilizamos
// una variable con letras uno nos tira error y el otro no.

var c = "23texto"

// arroja un error
var d = Number(c)
console.log(typeof(c)) // NaN (Not a Number)

// no toma el texto, solo transforma el numero
var e = parseInt(c)
console.log(typeof(e)) // number (23)
