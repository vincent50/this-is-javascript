// Para poder utilizar la nueva modalidad de modulos para ES6 debemos utilizar como extension .mjs

// Podemos importar de una forma mas dinamica, y de varias maneras
import { hello } from './modulo.mjs'
// import { hello as hola, bye } from './modulo.js'
// import * as saludos from './modulo.js'

console.log( hello() )