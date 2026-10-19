// This playground is meant to help the user experiment on the concept
// of promises while also introducing them to async await

var addTwoPromises = async function(promise1, promise2) {
	res = await Promise.all([promise1, promise2]);

	return res[0] + res[1];
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(console.log);
