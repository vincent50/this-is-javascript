// Gracias a estos metodos, podemos eliminar los espacions que esten al inicio o
// al final de un String

let hello = '                      hello world';
console.log('antes', hello);
console.log('despues', hello.trimStart()); // inicio

let hello2 = 'hello world                           ';
console.log(hello2, ' antes');
console.log(hello2.trimEnd(), ' despues'); // final