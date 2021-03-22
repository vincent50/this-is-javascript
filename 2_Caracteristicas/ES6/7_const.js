// const - syntactic
const name = 'value'

/*
const: es una de las formas en que se declaran las variables a partir de ECMAScript 6, 
tiene las siguientes características:
*/


/*
- reinicializar: false
  una vez inicializada la constante no podemos reinicializarla
  esto arroja un error
*/
const example1 = 'foo'
const example1 = 'bar'
console.log(example1) // bar

/*
- reasignar: false
  No permite modificar el valor una vez inicializada
*/
const example2 = 'foo'
example2 = 'bar'
console.log(example2)

/*
- scope: block
  una vez inicializada la podemos llamar solo desde el bloque en donde se creo ({})
  El siguiente ejemplo arroja un error
*/

{
  const nombre = 'foo'
}
console.log(nombre)
