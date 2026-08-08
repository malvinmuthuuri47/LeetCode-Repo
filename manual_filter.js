function my_filter(array, callback) {
	// Create an empty results array
	const result = []

	// Step through each element of the array
	for (let i = 0; i < array.length; i++) {
		const element = array[i]

		// Run each element through the test function
		if (callback(element)) {
			// Only keep element if the test returns True
			result.push(element)
		}
	}
	return result;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const even = my_filter(numbers, function(num) {return num % 2 === 0})
console.log(even)
