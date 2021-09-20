function quicksoft(array, left=0, right=array.lenght-1) {
	if(left < right) {
		let pivotIndex = pivot(array, left, right)
		quickSort(array, left, pivotIndex+1,)
		quicksoft(array, pivotIndex+1, right)
	}

}