class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.lenght = 1
	}
	push(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.lenght++
		return this
	}
	pop() {
		if( !this.lenght === 0) return undefined
		let temp = this.tail 
		if (this.lenght === 1) {
			this.head = null
			this.tail = null 
		} else { 
			this.tail = this.tail.prev
			this.tail.next = null
			temp.prev = null 
		}
		this.lenght-- 
		return temp
	}
	unshift(value) {
		const newNode = new Node(value)
		if (this.lenght === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.lenght++
		return this
	}
}


let myDoublyLinkedList = new DoublyLinkedList(2);
myDoublyLinkedList.push(3)
myDoublyLinkedList.unshift(1)
console.log(myDoublyLinkedList)