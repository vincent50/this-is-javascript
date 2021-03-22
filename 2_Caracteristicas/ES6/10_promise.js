/*
  Javascript no es un lenguaje asincrono, pero se soluciono este problema con las promesas
  Tambien llegaron para solucionar el problema de los callbak ( callback hell )
*/

// La promesa necesita dos argumentos:
// resolve: en caso de que se resolvio
// reject: en caso de que se rechaza

const hello = () => {
  // Para la sintaxis debemos utilizar una nueva instancia de Promise (new Promise)
  // y dentro de sus argumentos devemos agregar resolve y reject
  return new Promise( (resolve, reject) => {
    if (true) { // solo para pruebas, CAMBIA ESTA VARIABLE PARA PROBAR LOS CAMINOS
      resolve('Hey!') // en caso de ser prositivo, resolvemos la promesa
    } else {
      reject('Ups!') // en caso de ser negativo, rechazamos la promesa
    }
  })
}

// Para llamar la promesa utilizamos esta sintaxis
hello()
.then( response => console.log(response) ) // en caso de resolver lo obtenemos con then
.then( () => console.log('hola') ) // en caso de necesitar realizar mas cosas, podemos anidar con mas then
.catch( error => console.log(error) ) // en caso de rechazar, lo atrapamos con catch
