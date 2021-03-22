/*
  A continuacion veremos que valores son tomados como true o false para javascript
*/

//Ejemplos en los que Boolean devuelve Falso:
Boolean() //false
Boolean(0) //false
Boolean(null) //false
Boolean(NaN) //false
Boolean(undefined) //false
Boolean(false) //false
Boolean("") //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(true)
Boolean(1) //true para 1 o cualquier número diferente de cero (0)
Boolean("a") //true para cualquier caracter o espacio en blanco en el string
Boolean([]) //true aunque el array esté vacío
Boolean({}) //true aunque el objeto esté vacío
Boolean(function(){}) //Cualquier función es verdadera también
Boolean(-1) // true hay que tener cuidado ya que solo cero es false (0)
