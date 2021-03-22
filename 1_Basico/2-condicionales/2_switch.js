/*
  Nos permite controlar una validacion con multiples casos de una forma ordenada.

  Nota: Hay que tener en cuenta de que si la opcion a validar puede entrar en mas de un caso,
  este ejecutara solo el primero en caso de tener el break
*/
var option = 2

switch ( option ) { // variable a validar
  case 1: // en caso de que sea 1
    console.log('soy uno')
    break // permite no seguir validando, es indispensable en la sintaxis, en caso de no estar validara todos los casos
  case 2: // en caso de que sea 2
    console.log('soy un dos')
    break
  default: // en caso de que no lo encontrara en los casos anteriores
    console.log('puedo ser cualquier otro numero aparte de uno o dos')
}