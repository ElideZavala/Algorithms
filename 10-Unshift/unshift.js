let elementos = [11, 3, 23, 7, 4];
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}
	unshift(value) {
		const newNode = new Node(value)
		if(!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head  // <== La cabeza sera el nuevo elemento. 
			this.head = newNode 
		}
		this.length++
		return this
	}
}