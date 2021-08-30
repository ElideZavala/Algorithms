class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addvertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
			return true
		}
		return false
	}
}