const numbers = [1,2,3,4,5];

function myReduce(arr, callback, initialValue) {
	let accumulator;
	let startIdx;

	if (arguments.length >= 3) {
		accumulator = initialValue;
		startIdx = 0;
	} else {
		if (arr.length === 0) {
			throw new TypeError("Reduce of empth array with no initial value");
		}

		accumulator = arr[0];
		startIdx = 1;
	}

	for (let i = startIdx; i < arr.length; i++) {
		accumulator = callback(accumulator, arr[i]);
	}

	return accumulator;
}

const result = myReduce(numbers, function (accumulator, currVal) {
	return accumulator + currVal;
}, 10);

console.log(result)
