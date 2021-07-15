// Todos crean un nuevo nodo
class LinkedList {
	constructor(value) {
		// create new Node 
		const newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}
	push(value) {
		// create new Node add Node to end
	}
	unshift(value) {
		if (!this.head) return undefined;
	}
	insert(index, value) {
		// create new Node insert Node 
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

let myLinkedList = new LinkedList(4)