// TODO: Repetira una lista vinculada. 

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
	shift() {
		if (!this.head) return undefined
		let temp = this.head
		this.head = this.head.next 
		this.next = null 
		this.length--
		if (this.length === 0) {
			this.tail = null 
		}
		return temp 
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
	insert(index, value) {
		if (index === 0) return this.unshift(value)  // <== Si no tenemos indice lo colocamos al inicio del arreglo.
		if (index === this.length) return this.push(value) // <== Si el indice es igual a la logitud del arreglo lo colomos al ultimo. 
		if (index < 0 || index > this.length) return false // <== retornar false por que el index es menor a 0 a mayor al arreglo.
		
		const newNode = new Node(value)
		const temp = this.get(index - 1)

		newNode.next = temp.next
		temp.next = newNode
		this.length++
		return true
    }
    remove(index) {
	    if (index === 0) return this.shift()  // <== Eliminamos un elemento al inicio del arreglo.
	    if (index === this.length - 1) return this.pop() // <== Elimina el ultimo elemento del arreglo.
	    if (index < 0 || index >= this.lenght) return undefined  // <== Indefinido si el indice es neagtivo o mayor a la longitud.  
	    
	    const before = this.get(index - 1)
	    const temp = before.next
	     
	    before.next = temp.next
	    temp.next = null
	    this.lenght--
	    return temp 
    }
    reverse(index) {
		let temp = this.head
		this.head = this.tail
		this.tail = temp
		let next = temp.next
		let prev = null
		for(let i = 0; i < this.length; i++) {
			next = temp.next
			temp.next = prev
			prev = temp
			temp = next 
		}
		return this
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(1)
myLinkedList.push(3)
myLinkedList.reverse()
console.log(myLinkedList)