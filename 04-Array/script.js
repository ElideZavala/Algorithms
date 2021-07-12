const myArray = [11,3,23,7];

myArray.push(17);  // => agregamos un nuevo elemento

myArray.pop();     // => Quitamos el ultimo elemento

// ==>  ambas son dos operaciones 0(1)

myArray.shift()    // => Quitamos el primer elemento del array

myArray.unshift(11);  // => Agregamos un elemento a la primera posicion del arreglo

myArray.splice(1, 0, 'Hi'); // => Colocaremos algo en el indice 1, el zero indica que no eliminaremos ninguno y agregaremos un elemento Hi. 

// ==> corresponde .splice a 0(n) === 0( 1/2n)

// ==> Agregar y eliminar elementos desde el principio no es la mejor opcion 