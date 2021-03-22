/*
  un closure combina una funcion con el ambito lexico
  generando una funcion con que permite guardar informacion
  y perdurar en el tiempo
*/

// Ejemplo de alcancia

const moneyBox = ( coins ) => {
  var saveCoins = 0 // esta variable perdurara en el tiempo
  const countCoins = (coins) => { // creamos la funcion que realizara la accion con nuestra variable
    saveCoins += coins // modificamos nuestra variable de la funcion
    console.log( `moneyBox: ${saveCoins}` )
  }
  return countCoins // requerimos retornar la funcion para generar el closure
}

let myMoneyBox = moneyBox() // inicializamos nuestro clouser
myMoneyBox(3) // 3
myMoneyBox(1) // 4
