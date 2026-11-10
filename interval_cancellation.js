// This module introduces the learner to the concept of interval cancellation
// in JavaScript

/*
let count = 0;

const intervalId = setInterval(function() {
	count++;

	console.log(count);

	if (count === 5) {
		clearInterval(intervalId);
	}
}, 1000);
*/

var cancellable = function(fn, args, t) {
	fn(...args);

	const intervalId = setInterval(fn, t, ...args);

	return function cancelFn() {
		clearInterval(intervalId);
	}
};

function sayHello(name) {
	console.log(`Hello, ${name}!`);
}

const cancelFn = cancellable(sayHello, ["John"], 2000);
