function push(value) {
	const newNode = new Node(value);
	if (this.head === null) {
		this.head = newNode
		this.tail = newNode
	} else {
		this.tail.next = newNode
		this.tail = newNode //<== al final del arreglo
	}

	this.length++ // <== Incrementara la longitud
	return this // <== Retornaremos la longitud 
}

// Determinar si la lista esta vacia