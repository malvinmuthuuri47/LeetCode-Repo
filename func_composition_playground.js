// This module is meant to help the learner understand the concept of
// function composition by walking them through the examples provided

// Manual implementation
function addTen(number) {
	return number + 10;
}

function doubleNum(number) {
	return number * 2;
}

function subtractFive(number) {
	return number - 5;
}

// const result = doubleNum(addTen(5));
// console.log(result)

// Composition
function compose(functions) {
	return function(number) {
		let result = number;

		for (let i = 0; i < functions.length; i++) {
			result = functions[i](result);
		}

		return result;
	};
}

const functions = [
	addTen,
	doubleNum,
	subtractFive
];

const composed = compose(functions);
const result = composed(5);
// console.log(result)

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4))
