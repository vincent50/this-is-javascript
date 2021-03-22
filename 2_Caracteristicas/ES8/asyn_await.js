/*
  Async Await es una forma mas legible de poder utilizar nuestras funciones asyncronas
  como Promesas, es decir, que ambas pueden funcionar de la misma manera
*/

// Primero que nada construimos una Promesa para poder comparar con async await
const helloPromise = () => {
  return new Promise( (resolve, reject) => {
    (true) 
      ? setTimeout( () => resolve('Hello World'), 3000 )
      : reject(new Error('Test Error'))
  })
}

// Para poder definir nuestra funcion asincrona, debemos anteponer la palabra async antes de function
// o de () para las arrow functions


// Tambien podemos utilizar la palabra reservada await para poder esperar el funcionamiento de una
// funcion asincrona
const AsyncFunction = async () => {
  // Es muy importante utilizar try catch para poder controlar los errores de las funciones asincronas
  try {
    const hello = await helloPromise() // Esperamos a la respuesta de la funcion asincrona helloPromise
    console.log(hello) // Hello World
  } catch (error) { // En caso de cualquier error podemos capturarlos aqui
    console.error(error)
  }
}

// Si probamos ahora nuestra funcion, esperara 3 segundos antes de imprimir Hello World
AsyncFunction()