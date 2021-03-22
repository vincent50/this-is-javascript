// Podemos acceder y obtener a solo los elementos que necesitamos de un objeto
// destructurando 

let person = {
  name: 'Vincent',
  age: 30,
  country: 'Chile'
}

console.log(person.name, person.age, person.country)

let { name, age, country } = person // Sintaxis de destructuring

console.log(name, age, country)