
// Formula 0(n2 + n) ==> 0(n2)   // n no afecta al cuadrado de las operaciones 
function logItems(n) {
	for( let i = 0; i < n; i++) {
		for( let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}

	for( let k = 0; k < n; k++) {
		console.log(k);
	}
}



logItems(10);


