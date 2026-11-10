// This module is meant to help the learner experiment further with
// Promises, and particularly, Promise.allSettled()

function signUpUser(firstName, lastName) {
	return new Promise(function(resolve) {
		resolve({
			firstName: firstName,
			lastName: lastName
		});
	});
};

function uploadPhoto(filename) {
	return new Promise(function (resolve, reject) {
		reject(`${filename} cannot be processed`);
	});
};

function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)
	]);
};

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
