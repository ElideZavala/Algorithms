class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		// create new Node 
		const newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}

	// TODO: // Si esta la es la cabeza agrega el nuevo elemento. 
	push(value) {
		const newNode = new Node(value)
		if (!this.head) {
			Note: // Un solo elemento
				this.head = newNode
			this.tail = newNode
		}
		else {
			Note: // Al ultimo elemento. 
				this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
}


let myLinkedList = new LinkedList(7);
MediaQueryList.push(4)

console.log('%cpush.js line:4 cadena', 'color: #007acc;', cadena);