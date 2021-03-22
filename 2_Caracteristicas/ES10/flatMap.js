// flat map, a diferencia de flat podremos manipular la informacion con ayuda de una funcion anonima
// pero ambos aplanaran el array


let array = [1,2,3, [1,2,3, [1,2,3]]]

// En este caso ademas de aplanarlo, le agregaremos una a alfinal para ver como muta este arreglo

console.log( array.flatMap( (value) => [value + 'a']) ) // [ '1a', '2a', '3a', '1,2,3,1,2,3a' ]

// para los arrays aplanados los unira y agregara el valor al final