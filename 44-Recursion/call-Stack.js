function funcThree() {
	console.log('Three');
}

function funcTwo() {
	funcThree();
	console.log('two');
}

function funcOne() {
	funcTwo();
	console.log('One');
}

funcOne();