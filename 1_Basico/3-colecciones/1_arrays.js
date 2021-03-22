/*
  Un Array es una estructura de datos (Objeto) que permite almacenar un conjunto de datos
  Siendo Javascript un lenguaje debilmente tipado, permite ingresar diferentes tipos de datos en un mismo conjunto
*/

// Los podemos crear, generando una nueva instancia del objeto Array
var array = new Array("hi", true, 3, [2, false], {name: "Cosme"})
console.log(array)

// Como tambien podemos solo definirlo con corchetes []
var array = ["hi", true, 3, [2, false], {name: "Cosme"}]
console.log(array)


// Para acceder a un solo elemento debemos acceder por medio de un indice
console.log(array[0]) // "hi"

// Los elementos de un array siempre comienzan del indice 0
// ["hi", true, 3, [2, false], {name: "Cosme"}]     Valores
// [ 0  ,  1  , 2,  3[0, 1]  , 4]                   Indices

//En caso de tener un array dentro nuestro array, accedemos nuevamente con otro indice
console.log( array[3][0] ) // 2