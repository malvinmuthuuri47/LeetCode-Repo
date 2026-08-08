// Implementing a counter in a function. The outer function returns an inner function that returns the counter and increments it on every subsequent call

var createCounter = function(n) {
	return function() {
		return n++;
	};
}

n = -2
const counter = createCounter(n)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
