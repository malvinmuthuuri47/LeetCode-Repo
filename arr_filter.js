var filter = function(arr, fn) {
	const filteredArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

// const arr = [0, 10, 20, 30];
// const arr1 = [-2, -1, 0, 1, 2]
const arr2 = [1, 2, 3]
res = filter(arr2, (x, i) => i === 0);
console.log(res);
