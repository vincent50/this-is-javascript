//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data = {
  frontend: 'Felipe',
  backend: 'Vincet',
  design: 'Sanchez'
}

// Esto ignora las claves del objeto

const values = Object.values(data)
console.log(values) // [ 'Felipe', 'Vincet', 'Sanchez' ]

