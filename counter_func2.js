/**
 * @params {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
	let initialVal = init

	return {
		increment() {
			return ++init;
		},
		decrement() {
			return --init;
		},
		reset() {
			init = initialVal
			return init;
		}
	};
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
