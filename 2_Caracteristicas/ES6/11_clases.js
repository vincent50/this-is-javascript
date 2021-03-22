/*
  Las clases son una manera de sintaxis mas clara para manejar objetos 
  y poder implementar herencias dentro de javascript
*/

class calculator {
  // constructor
  constructor () {
    this.valueA = 0
    this.valueB = 0
  }

  sumar (valueA, valueB) {
    this.valueA = valueA // asignamos el valor en el scope global de la clase
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

// inicializando la clase
const calc = new calculator()
console.log( calc.sumar(2, 2) ) // 4
console.log( calc.valueA ) // 2