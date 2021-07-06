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

class LinkedList {
	constructor(value) {}
	push(value) {} // Nuevo elemento al final
	unshift(value) {} // Nuevo elemento al Inicio
	insert(index, value) {}
	remove(index) {}
	pop() {}
	shift() {}
}

let myLinkedList = new LinkedList(23);
myLinkedList.push(7);
myLinkedList.unshift(3);
myLinkedList.insert(1, 11); // Inserte en el indice de 1 el numero 11
myLinkedList.remove(1); // Eliminamos el elemento del indice 1 es decir eliminamos el 11.
myLinkedList.pop(); // Quitamos el ultimo elemento
myLinkedList.shift(); // Quitamos el primer elemento

console.log(myLinkedList);
console.log('please')