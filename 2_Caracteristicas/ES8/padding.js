// Padding: nos permite añadir cadenas a string tanto al inicio como al final, pudiendo modificar la cadena string como tal.

const string ='hello';
console.log( string.padStart(7, 'hi') ) // se añade al inicio la palabra 'hi'
console.log( string.padEnd(12, 'hi') ) // Se añade al final la palabra 'hi'
