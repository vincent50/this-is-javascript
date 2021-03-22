/*
  El hoisting es cuando las variables y funciones son registradas antes de iniciar el flujo
  este proceso solo funciona con las palabras reservadas var y function
*/


// Que pasa cuando imprimimos la variable antes de ser inicializada?
console.log(myName) // undefined
var myName = 'Declarada' // agrega 'Declarada' a la variable



// Esto pasa porque al iniciar el flujo lo que hace es lo siguiente:
var myName // inicializa automaticamente la variable antes de iniciar

console.log(myName) // como la variable no tiene nada definido, su valor sera undefined
myName = 'Declarada' // luego solo utilza la variable para declarar un nuevo valor

// ================================================================================================ //

/*
  Esto mismo sucede con las funciones, por ejemplo en este caso
*/

foo() // imprime: 'bar'

function foo(){
  console.log('bar')
}

// Esto sucede por que automaticamente se inicializara antes de comenzar el flujo
// quedando de la siguiente manera

function foo(){
  console.log('bar')
}

foo() // imprime: 'bar'