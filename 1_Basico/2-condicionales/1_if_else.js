/*
  Las clausulas de condiciones son reglas para poder generar bifurcaciones en nuestro flujo
*/

var edad = 18

// Podemos escribir solo un if en nuestro codigo, como tambien podemos anidar esta clausula
if (edad >= 18 && edad <= 24) {
  console.log('Tiene entre 18 y 24')
  if (edad == 18) {
    console.log('Tiene 18')
  }
} 
// Podemos ademas agregar un else if, esto quiere decir que en caso de no validar la clausula anterior validara esta clausula
else if (edad > 24 && edad < 34) {
  console.log('Tiene entre 25 y 33')
} 
// En caso de no entrar en las clausulas anteriores ingresara en else que es la opcion por default
else {
  console.log('Es mayor a 33')
}

// Debemos tener en cuenta que esta estructura es modificable a lo que necesitemos
// Podemos solo utilizar un if, en caso de no necesitar controlar mas opciones

if (edad >= 18 && edad <= 24) {
  console.log('Tiene entre 18 y 24')
} 

// o solo un if else, en caso de validar dos opciones

if (edad >= 18 && edad <= 24) {
  console.log('Tiene entre 18 y 24')
} else {
  console.log('Es mayor a 24')
}


// Otro modo de realizar condiciones es la siguiente.
var edad = 19
if (edad == 18) console.log('Tiene 18')
else console.log('No tiene 18')

// esto es posible agregando una clausula por linea al inicio, ya que agregarlas juntas no se podra a menos que utilicemos llaves {}

// ================= Ternario =========================== //
// El operador ternario nos permite realizar una validacion legible en una sola linea

// La sintaxis es la siguiente 
// (condicion) ? true : false

var resultado = edad == 18 ? 'Si tengo 18' : 'No tengo 18'
console.log(resultado)
