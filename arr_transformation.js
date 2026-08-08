var map = function(arr, fn) {
	const result = []

	for(let i = 0; i < arr.length; i++) {
		result[i] = fn(arr[i], i);
	}
	return result;
}

arr = [1,2,3];
test = map(arr, x => x * 2)
console.log(test)
