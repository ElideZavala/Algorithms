// ==> METODO MAS EFICIENTE Y CODIGO RAPIDO
// It number the operation always one
function addItems(n) {
	return n + n 
}

// Lo mas eficiente es 0(1) ==> Si escuchas 0(1) siempre sera de uno.

/* Tecnica Divides y Venceras(divide and conquer) */



// ==> TERMINOS DIFERENTES PARA LA ENTRADA 
// O(log n)

function logItems(a, b) {              // ==> La primera se ejecutara a las 8 y la otra a la hora de dormir
	for ( let i = 0; i < a; i++) {    // ==> 0(n) + 0(n) = 0(2n)
		console.log(i);		    // ==> Usando la metodología ganar y vencer nos quedaria 0(n)           	
	}

	for ( let j = 0; j < b; j++) {
		console.log(j);
	}
} 

// Respuesta ==>
// El primer ciclo for es 0 de A o cualquiera que sea su variable
// El segundo va hacer 0 de B o cualquiera que sea su variable
// 0( a + b)


// Que pasarian si estuvieran anidadas?
function logItemsTwo(a, b) {              
	for ( let i = 0; i < a; i++) {
		for ( let j = 0; j < b; j++) {
			console.log(i,j);
		}        	
	}

} 

// Respuesta ==>
// 0(a * b)