/**
 * Porpagation Properties
 */
 const person = {
  name: 'Oscar',
  age: 32
}

// Nos permite unir dos objetos de una manera mas sencilla

const personInformation = {
  ...person, // a este objeto le agregamos las propiedades del objeto person
  country: 'MX'
}

// Pero no lo une como un objeto dentro de otro objeto,
// sino que combina ambos objetos en uno solo

console.log(`personInformation: `, personInformation) // { name: 'Oscar', age: 32, country: 'MX' }