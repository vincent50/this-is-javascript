/*
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras se cumple una condición específica
do/while - también recorre un bloque de código mientras se cumple una condición específica
*/

// while: nos permite repetir el codigo dentro del bloque {}
// hasta que se cumpla la condicion inicial

var contador = 0

// basicamente imprimira el contador mientras no sea mayor o igual a 10
while (contador < 10) {
  console.log(contador++)
}

// para el ejemplo de for

var nombres = [ 'Maria', 'Sergio', 'Rosa', 'Daniel']

while (nombres.length > 0) {
  console.log(nombres)
  console.log(nombres.shift())
}


// do..while

// A diferencia de wl while, este por lo menos ejecuta una vez
// el codigo dentro del bloque {} de do.

var contador = 10

do {
  console.log('Este bloque se ejecuta una vez')
  contador++
} while (contador < 10)