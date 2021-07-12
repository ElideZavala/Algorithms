// n * n = n2  => O(n2)
// function logItems(n) {
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			console.log('%cscript2.js line:4 i,j', 'color: #26bfa5;', i,j);
// 		}
// 	}
// }

// n * n * n = n3 => 0(n3)
function logItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				console.log(i, j, k);
			}	
		}
	}
}

// Producimos 100 Articulos
logItems(10);