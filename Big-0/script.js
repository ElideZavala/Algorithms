
// El codogo corre n
// function logItems(n) {
// 	for (let i = 0; i < n; i++) {
// 		console.log('%cscript.js line:3 i', 'color: white; background-color: #007acc;', i);
// 	}
// }


// Nuestro codigo corre 2n =>  Es una operacion O(2n)
function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log('%cscript.js line:3 i', 'color: white; background-color: #007acc;', i);
	}
	
	for (let j = 0; j < n; j++) {
		console.log('%cscript.js line:8 j', 'color: white; background-color: #007acc;', j);
	}
}

logItems(3);