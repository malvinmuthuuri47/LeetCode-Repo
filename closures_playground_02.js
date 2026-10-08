// This module is meant to refresh the learner's memory on the concept
// of closures in JavaScript

/*
function outer() {
	let message = "Hello";

	function inner() {
		console.log(message);
	}

	return inner;
}

const myFunction = outer();

myFunction();
*/

// using closures to implement the logic
/*
function once(fn) {
	let hasRun = false;

	return function(value) {
		if (hasRun === false) {
			hasRun = true;

			return fn(value);
		}
	};
}

function calculatePrice(price) {
	return price * 1.16;
}

const calculateOnce = once(calculatePrice);

console.log(calculateOnce(100));
console.log(calculateOnce(200));
*/

/*
function createOnce() {
	let result;

	return function(value) {
		if (result === undefined) {
			result = value * 2;
			return result;
		}
	};
}

const calculate = createOnce();
console.log(calculate(10));
console.log(calculate(20));
*/

/*
function once(fn) {
	let hasRun = false;

	return function(...args) {
		if (hasRun === false) {
			hasRun = true;
			return fn(...args);
		}
		return undefined;
	};
}

function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
	return a / b;
}
*/

// const addOnce = once(add);

/*
console.log(addOnce(10, 5));
console.log(addOnce(20, 10));
console.log(addOnce(30, 15));
*/

// const multiplyOnce = once(multiply);

/*
console.log(multiplyOnce(10, 5));
console.log(multiplyOnce(20, 10));
console.log(multiplyOnce(20, 20));
*/

// const subtractOnce = once(subtract);

/*
console.log(subtractOnce(20, 5));
console.log(subtractOnce(30, 10));
console.log(subtractOnce(20, 10));
*/

// const divideOnce = once(divide);

/*
console.log(divideOnce(20, 5));
console.log(divideOnce(50, 5));
console.log(divideOnce(30, 5));
*/

var once = function(fn) {
	let hasRun = false;

	return function(...args){
		if (hasRun === false) {
			hasRun = true;
			return fn(...args);
		}
		return undefined;
	}
}

function fn(a, b, c) {
	return a + b + c;
}

const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
