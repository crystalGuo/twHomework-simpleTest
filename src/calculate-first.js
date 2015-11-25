function single_element(arr) {
	var evenArr = [];
	var result = [];
	
	for (var i=1; i<arr.length; i+=2)
		evenArr.push(arr[i]);
	
	for (var i=0; i<evenArr.length; i++) {
		if (evenArr.indexOf(evenArr[i])==evenArr.lastIndexOf(evenArr[i])) 
			result.push(evenArr[i]);
	}
	
	return result;
}