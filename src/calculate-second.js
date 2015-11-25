function calculate_median(arr) {
	var evenArr = [];
	var result;
	
	for (var i=1; i<arr.length; i+=2)
		evenArr.push(arr[i]);
	
	evenArr.sort();
	
	if ((evenArr.length%2)!=0) {
		var resultIndex = (evenArr.length-1)/2;
		result = evenArr[resultIndex];
	}
	else {
		var resultIndex = evenArr.length/2;
		result = (evenArr[resultIndex-1]+evenArr[resultIndex])/2;
	}
	
	return result;
}
