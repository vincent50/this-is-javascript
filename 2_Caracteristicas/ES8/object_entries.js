/*
  Object entries genera una matriz de arreglos, en donde se almacenan las claves y los valores
*/

const data = {
  frontend: 'Felipe',
  backend: 'Vincet',
  design: 'Sanchez'
}

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data)
console.log( entries )
// [
//   [ 'frontend', 'Felipe' ],
//   [ 'backend', 'Vincet' ],
//   [ 'design', 'Sanchez' ]
// ]

//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length) // 3

