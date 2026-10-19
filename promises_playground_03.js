// This module is meant to help the learner understand promises a bit
// more as it acts as a playground for the promises concept

/*
function checkUsername(username) {
	return new Promise(function(resolve, reject) {
		console.log("Checking username...");

		setTimeout(function() {
			if (username === "") {
				reject("Username cannot be empty.");
			} else if (username === "alice") {
				resolve("Username is already taken.");
			} else {
				resolve("Username is available.");
			}
		}, 30000);
	});
}

checkUsername("al")
	.then((msg) => { console.log(msg); })
	.catch((err) => { console.log(err); })

console.log("Continuing with the rest of the application...");
*/

function fetchUser(userId) {
	return new Promise(function(resolve, reject) {
		console.log("Requesting user details from the server...");

		setTimeout(function() {
			if (userId === 42) {
				const user = {
					id: 42,
					name: "Alice",
					role: "Developer"
				};

				resolve(user);
			} else {
				reject(new Error("User not found."));
			}
		}, 20000);
	});
}

/*
fetchUser(42).then((user) => {
	console.log("User retrieved successfully.");
	console.log(user);
	console.log("Name: ", user.name);
	console.log("Role: ", user.role);
}).catch((err) => {
	console.log("Failed to retrieve user: ", err.message);
});
*/

// async execution of the function
/*
async function displayUser() {
	try {
		const user = await fetchUser(42);
		console.log(user.name);
	} catch (error) {
		console.log(error.message);
	}
}

displayUser();

console.log("The application can continue doing other work.");
*/

// Promise arithmetics
function getFirstNumber() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(10), 10000);
	});
}

function getSecondNumber() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(20), 20000);
	});
}

function addNumbers() {
	return Promise.all([
		getFirstNumber(),
		getSecondNumber()
	]).then((res) => { return res[0] + res[1] })
}

addNumbers().then((res) => console.log(res));
