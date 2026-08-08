// Function without rest parameters
function addThreeNumbers(a, b, c) {
	return a + b + c
}

console.log('Without rest parameters: ', addThreeNumbers(1, 2, 3))

// Function with rest parameters - handles any number of arguments
function addAllNumbers(...numbers) {
	console.log(numbers)

	let total = 0
	for (let num of numbers) {
		total += num
	}
	return total
}

console.log('Call One with REST parameters: ', addAllNumbers(1, 2, 3))
console.log('Call Two with REST parameters: ', addAllNumbers(1, 2, 3, 4, 5))
console.log('Call Three with REST parameters: ', addAllNumbers(10, 20))
