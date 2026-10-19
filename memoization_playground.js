// This file contains the code meant to showcase the concept of memoization

// Memoization of one specific function
/*
const cache = {};
let calculationCount = 0;

function square(number) {
	if (cache[number] !== undefined) {
		console.log('Returning Cached result...');

		return cache[number];
	}

	calculationCount++;

	console.log('Calculating...');
	const result = number * number;
	cache[number] = result;

	return result;
}

console.log(square(5));
console.log(square(5));
console.log(square(3));
console.log(square(5));
console.log(square(3));

console.log('Total Function calls:', calculationCount);
*/

// Memoization logic that works for multiple functions
/*
function memoize(fn) {
	const cache = {};

	return function(number) {
		if (cache[number] !== undefined) {
			console.log('Returning cached result...');
			return cache[number];
		}
		// No cached results exist, so execute the original function
		console.log('Calculating...');
		const result = fn(number);
		cache[number] = result;

		return result;
		};
}

// function that calculates the square of a number
function square(number) {
	return number * number;
};

// memoized version of square
const memoizedSquare = memoize(square);

// Test the memoized function
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(3));
console.log(memoizedSquare(5));
console.log(memoizedSquare(3));
*/

// Memoization logic that works for multiple functions and uses the rest parameter for multiple function arguments
function memoize(fn) {
	const cache = {};

	return function(...args) {
		const key = JSON.stringify(args);

		if (cache[key] !== undefined) {
			console.log('Returning cached Result...');
			return cache[key];
		}
		// No cached results exits, so execute the original function
		console.log('Calculating...');
		const result = fn(...args);
		cache[key] = result;

		return result;
	};
}

function add(a, b) {
	return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(3, 2));
console.log(memoizedAdd(2, 3));
