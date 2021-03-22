// Si asignamos cualquiera de las variables en la raiz del proyecto
// seran tomadas como globales

var hello = 'Hello' 
var hello = 'Hello+' // Hay que tener cuidado, porque se puede reasignar 
let world = 'World' // no podemos reasignar
const helloworld = 'Hello World' // no podemos reasignar

const anotherFunction = () => {
  console.log(hello)
  console.log(world)
  console.log(helloworld)
}

anotherFunction()


// Mala practica en el desarrollo
// pero una forma de asignar global una variable

const helloWorld = () => {
  globalVar = 'im global'
}

helloWorld()
console.log(globalVar) // 'im global'


// Otra mala practica que agregamos variables globales
const anotherFunctionGlobal = () => {
  var localVar = globalVar2 = 'Im Global!'
}

anotherFunctionGlobal()
console.log(globalVar2)