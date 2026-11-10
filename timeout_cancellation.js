// This module is intended to introduce the learner to the concept of timeout
// cancellation in JavaScript

/*
let timerId;

function placeOrder() {
	timerId = setTimeout(function () {
		console.log("Your order is being prepared!");
	}, 10000);
}

placeOrder();

function cancelOrder() {
	clearTimeout(timerId);
	console.log("Your order has been cancelled.");
}

cancelOrder();
*/

// Returning a cancelTimer function inside another function
function startTimer() {
	const timerId = setTimeout(function () {
		console.log("Time is up!");
	}, 5000);

	return function cancelTimer() {
		clearTimeout(timerId);
		console.log("Timer cancelled!");
	};
}
