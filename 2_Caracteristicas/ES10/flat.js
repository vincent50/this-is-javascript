// flat nos permite aplanar arreglos, 
// Esto se refiere que podemos quitar un arreglo dentro de un arreglo uniendolo
// al principal

let array = [1,2,3, [1,2,3, [1,2,3]]]

// Si nosostros ejecutamos flat sin argumentos, por default tomara el primer nivel de array encontrado
console.log( array.flat() ) // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
// Es decir el primer arreglo encontrado sera parte del primero, pero si hay otro arreglo dentro del 
// arreglo aplanado se mantendra intacto

console.log( array.flat(2) ) // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
// Entonces si le especificamos en profundidad un 2 este tomara los arreglos dentro de arreglos
// EJ: [1,2,3, [1,2,3]]

