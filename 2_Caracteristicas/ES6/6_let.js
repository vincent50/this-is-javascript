// let - syntactic
let name = 'value'

/*
let: es una de las formas en que se declaran las variables a partir de ECMAScript 6, 
tiene las siguientes características:
*/


/*
- reinicializar: false
  una vez inicializada la variable no podemos reinicializarla
  esto arroja un error
*/
let example1 = 'foo'
let example1 = 'bar'
console.log(example1) // bar

/*
- reasignar: true
  le podemos asignar un nuevo valor una vez inicializada
*/
let example2 = 'foo'
example2 = 'bar'
console.log(example2)

/*
- scope: block
  una vez inicializada la podemos llamar solo desde el bloque en donde se creo ({})
  El siguiente ejemplo arroja un error
*/

{
  let nombre = 'foo'
}
console.log(nombre)
