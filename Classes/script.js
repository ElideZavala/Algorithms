class Cookie {
	constructor(color) {
		this.color = color;
	}

	getColor() {
		return this.color;
	}
	setColor(color) {
		this.color = color;
	}
}

let cookieOne = new Cookie('blue');
let cookieTwo = new Cookie('green')

cookieOne.setColor('yellow');