// ES5
function newFunction1 (name, age, country) {
  var name = name || 'Vincent'
  var age = age || 30
  var country = country || 'Chile'
  console.log(name, age, country)
}

//ES6
function newFunction2 (name = 'Vincet', age = 30, country = 'Chile') {
  console.log(name, age, country)
}

newFunction1() // Vincent 30 Chile
newFunction1('Ricardo', 40, 'Bolivia') // Ricardo 40 Bolivia