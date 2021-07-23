// TODO: Colocar un elemento en un lugar especifico

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
	insert(index, value) {
		if (index === 0) return this.unshift(value)  // <== Si no tenemos indice lo colocamos al inicio del arreglo.
		if (index === this.length) return this.push(value) // <== Si el indice es igual a la logitud del arreglo lo colomos al ultimo. 
		if (index < 0 || index > this.length) return false // <== retornar false si el indice no entra al inicio o al final del arreglo. 
    }
}