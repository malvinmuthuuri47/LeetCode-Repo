// This module is meant to contain the code that's meant to showcase
// the concept of promises in JavaScript

function orderPizza(flavor) {
	return new Promise((resolve, reject) => {
		console.log("Order placed...");

		setTimeout(() => {
			if (flavor === 'pineapple') {
				reject(new Error("We don't make that"));
			} else {
				resolve(`${flavor} pizza`);
			}
		}, 20000);
	});
}

console.log("Program executes and continues with the rest of the program.")

/*
orderPizza("margherita")
.then(pizza => console.log("Got: ", pizza))
.catch(error => console.log("Problem: ", error.message))
.finally(() => console.log("Order closed"));
*/

orderPizza("pineapple")
.then(pizza => console.log("Got: ", pizza))
.catch(error => console.log("Problem: ", error.message))
.finally(() => console.log("Order closed"));

/*
console.log("A");

new Promise((resolve) => {
	console.log("B: inside the executor");
	resolve("done");
}).then(value => console.log("D:", value));

console.log("C");
*/

/*
console.log("1: start");

setTimeout(() => console.log("4: setTimeout"), 2000);

Promise.resolve().then(() => console.log("3: promise"));

console.log("2: end");
*/

/*
const pizza = wait(10000, "pizza");
const drink = wait(25000, "soda");
const salad = wait(15000, "salad");

Promise.all([pizza, drink, salad])
.then(results => console.log(results));
*/
