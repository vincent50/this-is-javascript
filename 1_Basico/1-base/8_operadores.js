/* ========= operador de asignacion ========= */
// Es el que utilizamos para asignar un valor (=)
var name = 'value'

var edad = 40
console.log(edad++) // se suma uno una vez utilizada (40 antes) (41 despues)
var edad = 40
console.log(++edad) // se suma uno antes de utilizar (41 antes y despues)

/* ========= operadores unitarios ========= */

// realiza una negacion a nuestro valor (!)
// un ejemplo mas visible seria: is not false?
console.log(!false) // true


// ========= Operadores aritmeticos ========= //
console.log(3 + 2)    // suma o concatenacion
console.log(50 - 10)  // resta
console.log(10 * 20)  // multiplicacion
console.log(20 / 2)   // division
console.log(15 % 2)   // resto

/* ========= Operadores de condicion ========= */

console.log( 3 == '3' ) // true, comparativo no preciso
console.log( 3 === '3' ) // false, comparativo preciso
console.log( 5 < 3 ) // false, es menor que
console.log( 5 > 3 ) // true, es mayor que
console.log( 5 <= 3 ) // false, es menor o igual a
console.log( 5 >= 3 ) // true, es mayor o igual a

console.log( a && b ) // las dos deben ser verdadero
console.log( a || b ) // una de las dos es verdadero
