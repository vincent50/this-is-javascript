// var - syntactic
var name = 'value'

/*
var: Era la forma en que se declaraban las variables hasta ECMAScript 5. 
Casi ya no se usa porque es de forma global y tiene las siguientes características:
*/


/*
- reinicializar: true
  una vez declarada la variable podemos reinicializarla
  colocando nuevamente la variable con otro valor
*/
var name = 'foo'
var name = 'bar'
console.log(name) // bar

/*
- reasignar: true
  le podemos asignar un nuevo valor una vez inicializada
*/
var name = 'foo'
name = 'bar'
console.log(name)

/*
- scope: global
  una vez inicializada la podemos llamar desde cualquier bloque ({})
*/

{
  var nombre = 'foo'
}
console.log(nombre)
