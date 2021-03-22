/*
  Scope: Alcance que tienen las variables en el codigo.

  Existen 2 tipos de scopes.

  Global: Puede ser llamada a lo largo de nuestro programa. Para crear una debe ser en la raiz de nuestro codigo
  Local: Solo puede ser llamada dentro del bloque de codigo en el que se declaro.

  Ejemplo:
    creamos una variable en la raiz y la llamamos dentro de una funcion
    creamos una variable dentro de la funcion y la intentamos llamar fuera de la funcion
*/

var variable_global = 'Hola'

function bolck(){
  var variable_local = 'Mundo!'
  console.log(`${variable_global} ${variable_local}`)
}

bolck() // Hola Mundo!
console.log(variable_local) // Genera un error, porque no esta definida la variable variable_local