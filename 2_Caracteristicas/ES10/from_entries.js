//-------------fromEntries----------------------/
// array to object

// Nos permite construir un objeto sin especificar sus nombres de propiedades
// Solo tomara el primer valor como key y el segundo valor como value

let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries)) // { name: 'oscar', age: 32 }