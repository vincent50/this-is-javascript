/*
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras se cumple una condición específica
do/while - también recorre un bloque de código mientras se cumple una condición específica
*/

var nombres = [ 'Maria', 'Sergio', 'Rosa', 'Daniel']

// ===================   for  ============================================= //

// Forma 1: sintaxis
// for (variable_de_indice; condicion; incremento)
// en este ejemplo index aumenta uno por cada ciclo
for (var index = 0; index < nombres.length; index++) {
  console.log(nombres[index]) // obtenemos el valor por indice en cada ciclo
}

// Forma inversa
// La diferencia es que definimos el total, recorre mientras sea mayor a 0 y
// restamos por cada ciclo hasta llegar a cero
for (var index = nombres.length; index > 0; index--) {
  console.log(nombres[index])
}

// Forma 2: nos permite obtener el index de una forma mas compacta
var nombres = [ 'Maria', 'Sergio', 'Rosa', 'Daniel']

for (var index in nombres) { // nos obtiene el indice de cada elemento
  console.log(nombres[index]) // obtenemos el valor por indice en cada ciclo
}

// Forma 3: Obtiene el dato por cada ciclo sin necesidad de utilizar indices
var nombres = [ 'Maria', 'Sergio', 'Rosa', 'Daniel']

for (var nombre of nombres) { // obtiene cada nombre por ciclo
  console.log(nombre)
}