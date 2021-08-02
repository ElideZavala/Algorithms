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
	shift() {
		if (this.lenght === 0) return undefined
		let temp = this.head
		if (this.lenght === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
			this.head.prev = null
			temp.next = null
		}
		this.lenght--
		return temp 
	}
	get(index) {
		if (index < 0 || index >= this.lenght) {
			return undefined 
		}
		let temp = this.head
		if (index < this.lenght/2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next
			}
		} else {
			temp = this.tail
			for(let i = this.lenght - 1; i > index; i--){
				temp = temp.prev
			}
		}
		return temp
	}
	set(index, value) {
		
	}
}


let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.get(1)
console.log(myDoublyLinkedList)