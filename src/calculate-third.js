function even_group_calculate_average(arr) {
    var result = [];
	
	var temp = arr.filter(function(val,key) {
		return key % 2 ==1;
	}).filter(function(val) {
		return val % 2 ==0;
	});
	
	if (temp==0) 
		result.push(0);
	else 
		result = calculate_even_average(temp);
	
	return result;
}

function calculate_even_average(arr) {
	var result = [];
	var less10 = [];
	var less100 = [];
	var more100 = [];
	
	for (var i=0; i<arr.length; i++) {
		if (arr[i]<10)
			less10.push(arr[i]);
		else if (arr[i]<100)
			less100.push(arr[i]);
		else
			more100.push(arr[i]);
	}
	
	if (arr.length==more100.length) {
		result.push(calculate_every_array(more100));
	}
	else {
		result.push(calculate_every_array(less10));
		result.push(calculate_every_array(less100));
		result.push(calculate_every_array(more100));
	}
	
	return result;
}

function calculate_every_array(arr) {
	var avg = (arr.reduce(function(p,c) {
			p += c;
			return p;
		}))/arr.length;
	return avg;
}