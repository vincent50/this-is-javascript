// Cuando definimos variables dentro de bloques son llamadas locales
// estas variables son accedidas solo por los bloques de codigo que llamamos

const helloWorld = () => {
  const scope = 'Hola'
  console.log(scope)
}

helloWorld() // Hola

// Es decir que si intentamos acceder a la variable creada dentro de la funcion
// obtendremos un error
console.log(scope) // ReferenceError: scope is not defined


// Para este ejemplo, aunque tengamos una variable global con el mismo nombre
// que nuestra variable local, se tomara la de la variable local
// esto gracias al ambito lexico
// Esto refiere a que las variables seran buscadas desde el interior de los bloques hasta la raiz

var scope = 'im global'

const functionScope = () => {
  var scope = ' i am just a local' // Esta variable es tomada como local y sera la primera en ser buscada
  const func = () => {
    return scope // Esta variable es tomada desde nuestro bloque de funcion functionScope
  } 
  console.log( func() ) // ' i am just a local'
}

functionScope()


// Acceso a variables por bloques

const fruits = () => {
  if (true) {
    var fruit1 = 'platano' // Puede acceder fuera de este bloque, pero dentro de la funcion
    let fruit2 = 'kiwi' // No es accesible fuera de este bloque
    const fuit3 = 'manzana' // No es accesible fuera de este bloque
  }
  console.log(fruit1) // platano
  console.log(fruit2)  // fruit2 is not defined
  console.log(fruit3) // fruit3 is not defined
}

fruits()


// Otro ejemplo con let

let x = 1
{
  let x = 2 // si declaramos en otro bloque el mismo nombre de una variable, se creara una nueva referencia diferente a la varible que existe en el ambito global
  console.log(x) // 2
}
console.log(x) // 1 // Esto es porque let solo accede a la variable de su bloque



// Ejemplo dentro de funciones asincronas

function functionName() {
	// Para este ejemplo declarare que el for solo de 3 "vueltas", es decir la condición sera: i < 3.
	for(var i = 0; i < 3; i++) {
		setTimeout(function() {
			console.log(i)
		}, 1000)
	}
	// Este console.log podra acceder a i aun afuera del for, esto por que la variable i fue declarada y asignada antes que todo en tiempo de ejecución (hoisting).
	console.log('El valor final de "i" es: ' + i) 
  // El valor final de "i" es: 3
  // 3
  // 3
  // 3
}

functionName()

// El for estará ejecutándose en el Call Stack mientras la condición propuesta en el for (i < 3) se cumpla, por tanto también se ejecutara el setTimeout cada que la condición del for sea verdadera, sin embargo hay que recordar que el setTimeout es una función del navegador, entonces el setTimeout pasara a ejecutarse en “segundo plano” y una vez que los tiempos de espera definidos de los setTimeout se cumplan, estos pasaran al Callback Queue.
// Una vez que la condición del for ya no se cumpla, pasara a ejecutar el console.log que mostrará el valor final que para entonces será igual a 3 por que el for ya estuvo mutando el valor con cada incremento (i++).
// Posteriormente ya cuando el Call Stack esta vació pasaran a ejecutarse el callback de cada setTimeout que a su vez ejecutan un console.log imprimiendo el valor de la variable i, recordando que i ya tiene el valor final de 3 por que se había incrementado en uno en cada “vuelta” que daba el for.