var opciones = ['piedra', 'papel', 'tijera'] // arreglo de opciones con posiciones [0, 1, 2]

function resultado(user) {
  user = user.toLowerCase() // en caso de que se escriba en mayuscula, lo pasa a minusculas
  var cpu_option = Math.floor(Math.random()* 3) // Obtiene un numero al azar entre 0 a 2
  var cpu = opciones[cpu_option] // obtiene la opcion de la cpu al azar

  if (user === cpu) {
    console.log('Empate')
  } 
  else if (
    (user === opciones[0] && cpu === opciones[2]) ||
    (user === opciones[1] && cpu === opciones[0]) ||
    (user === opciones[2] && cpu === opciones[1])
  ) {
    console.log(`Usuario: ${user}, CPU: ${cpu}`)
    console.log(`Usuario Gana`)
  } else {
    console.log(`Usuario: ${user}, CPU: ${cpu}`)
    console.log(`CPU gana`)
  }
}

resultado('tijera')