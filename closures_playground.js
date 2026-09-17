// This module is meant to introduce the learner to the concept of closures


function createCounter() {
	let count = 0;

	function increment() {
		count += 1
		console.log(count)
	}

	return increment;
}

const counter = createCounter();

counter();
counter();
counter();
