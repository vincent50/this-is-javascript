/**
* Spread Operator
*/
const obj = {
 name: 'Vincent',
 age: 30,
 country: 'Chile'
}

// Este operador nos permite destructurar nuestro objeto en diferentes variables si destruir
// todo el objeto principal
let { name, ...addInfo } = obj // Aqui estamos guardando en las variables name y addInfo
console.log(`name: ${name}`) // Vincent // en la variable name solo guardamos la propiedad name del objeto
console.log(`additional information: `, addInfo) // { age: 30, country: 'Chile' } // y en esta segunda variable todo lo demas con la misma organizacion

let { country, ...nameAndAge } = obj // Aqui guardamos country en una variable y lo demas que es name y age en una variable llamada nameAndAge
console.log(`name and age: `, nameAndAge) // { name: 'Vincent', age: 30 }
