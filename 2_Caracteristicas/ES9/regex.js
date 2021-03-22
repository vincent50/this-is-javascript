/**
 * Regex
 */

// Podemos separar en bloques los matchs en un regex
// Para ello utilizamos entre parentesis () las opciones obtenidas

// En este ejemplo separamos cada dato de una fecha para luego obtenerlas por cada seccion

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-28')
 const year = match[1]
 const month = match[2]
 const day = match[3]
 console.log('Date -> ', year, month, day)