// This module is a continuation of the series about Promises, and in
// particular, the Promise that resolves the first in an array of
// promises when they are implemented in a function

function getFastestResult(promise1, promise2) {
	return Promise.race([promise1, promise2]);
}

const promiseUK = new Promise(function(resolve) {
	setTimeout(resolve, 1000, 'UK result');
});

const promiseFR = new Promise(function(resolve) {
	setTimeout(resolve, 500, 'FR result');
});

getFastestResult(promiseUK, promiseFR)
.then(function(result) {
	console.log(result);
});
