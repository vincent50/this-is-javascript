// Podemos crear variables privadas dentro de nuestros closures

const person = () => {
  var saveName = 'Name'

  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name
    }
  }
}

let newPerson = person()
console.log( newPerson.getName() ) // Name

// como es una variable privada, no podemos acceder a esta variable
console.log(  newPerson.saveName ) //  undefined

newPerson.setName('Vincent')
console.log( newPerson.getName() ) // Vincent