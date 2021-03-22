// Ahora podemos eliminar la palabra function, pero debemos agregar el simbolo =>
// para especificar la funcion, en caso de necesitar un bloque de codigo
// podemos utilizar llaves {}

const names = [
  { name: 'Vincent', age:30 },
  { name: 'Belen', age: 28 }
]

// ES5
let listOfNames1 = names.map( function (row) {
  console.log(row.name)
} )

// ES6
let listOfNames2 = names.map( (row) => console.log(row.name) )

// podemos asignar mas de un parametro a nuestra funcion anonima
const listOfNames3 = (name, age, country) => {
  // code
}

// no es necesario utilizar parentesis al usar solo un parametro
const listOfNames4 = name => {
  // code
}

// genera un return sin ser declarado
const squeare = num => num * num