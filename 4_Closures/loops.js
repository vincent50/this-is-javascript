// En este ejemplo, podemos ver que generamos un closure involuntario
// porque al utilizar la palabra var estamos guardando el ultimo valor guardado

function functionName() {
	// Para este ejemplo declarare que el for solo de 3 "vueltas", es decir la condición sera: i < 3.
	for(var i = 0; i < 3; i++) {
		setTimeout(function() {
			console.log(i)
		}, 1000)
	}
  console.log('El valor final de "i" es: ' + i) 
}

// Para solucionar este tipo de closure involuntarios, es mejor utilizar la variable let al utilizar
// bucles

function functionName() {
	// Para este ejemplo declarare que el for solo de 3 "vueltas", es decir la condición sera: i < 3.
  let i
	for(i = 0; i < 3; i++) {
		setTimeout(function() {
			console.log(i)
		}, 1000)
	}
  console.log('El valor final de "i" es: ' + i) 
}

functionName()