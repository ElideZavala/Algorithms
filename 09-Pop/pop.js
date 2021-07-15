// TODO: POP => Eliminar un elemento del extremo movido por la cola

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
	pop() {
		if(!this.head) return undefined
		let temp = this.head
		let pre = this.head
		while(temp.next) {   // <== mientras sea temp.next, pre sera igual a temp y temp pasara a ser temp.next 
			pre = temp
			temp = temp.next
		}
		this.tail = pre   // <== La cola sera igual a pre
		this.tail.next = null    // <== la siguiente cola sera igual a null, es decir no existira. 
		this.length--  //<== el la longitud decrementara. 
		if ( this.length === 0) {
			this.head = null
			this.tail = null 		
		}
		return temp 
	}
}