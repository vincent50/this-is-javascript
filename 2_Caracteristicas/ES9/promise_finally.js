/**
 * Promise Finally
 */
 const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!')
        }, 3000)
      : reject(new Error('Test Error'))
  })
}

// Ahora podemos agregar finally en nuestra promesa
// Esto nos permite ejecutar un nuevo codigo al final de su ejecucion

helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizó'))
