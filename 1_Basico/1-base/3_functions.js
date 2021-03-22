/*
  Existen dos tipos de funciones: Declarativas y de Expresion
  
  Diferencias:
  A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
  Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

*/


// Funciones Declarativas:
/*
  En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
*/
function nombre_funcion() {
  return 3
}
console.log(nombre_funcion())


// Expresión de función:
/*
  En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
  En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.
*/
var variable = function(){
  return 3
}
console.log(variable())


/* 
  Agregar parametros en las funciones 
  Como el lenguaje es debilmente tipado, se puede agregar cualquier tipo de dato
*/


function sumar(a, b) {
  return a + b
}
console.log( sumar(1, 4) ) // 5
console.log( sumar(1, "4") ) // 14


/*
  Las funciones no necesariamente deben retornar un valor
  tambien podemos solo declarar la funcion para un uso especifico
*/

function saludar(nombre) {
  console.log(`Hola ${nombre}`)
}
saludar('mundo!')
