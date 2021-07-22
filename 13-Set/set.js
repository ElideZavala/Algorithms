// TODO: Ir al indice y ambiar el valor de articulo de ese indice

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
	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined
		}
		let temp = this.head
		for (let i = 0; i < index; i++) {
			temp = temp.next
		}
		return temp
    }
	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value   // <== cambiamos el valor de temp. 
			return true          // <== retornamos true de que podimoscambiar el valor.
		}
	}
}