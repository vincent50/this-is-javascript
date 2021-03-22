/*
  Los generadores nos permiten crear funciones que pueden cambiar con el tiempo
  utilizando la palabra next() podemos obtener la siguiente sintaxis
*/

// Para poder declarar este tipo de funciones, debemos utilizar la palabra function*
// y utilizar la palabra yield para retornar un valor o volver a nuestro primer flujo

function* hello () {
    yield 'Hello, ' // el primer valor retornado
    yield 'World' // el segundo valor retornado
}

const generatorHello = hello()
console.log( generatorHello.next().value ) // Hello,      // imprime el primer valor retornado con yield
console.log( generatorHello.next().value ) // World       // imprime el segundo valor retornado con yield
console.log( generatorHello.next().value ) // undefined   // como no existe un siguiente valor a retornar, devuelve undefined
