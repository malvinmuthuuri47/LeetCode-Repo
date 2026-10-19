// This module introduces the concept of promises to the learner
// and ultimately intends to help the learner understand how 
// promises can be added together

/*
function getUser() {
	setTimeout(function() {
		return {
			id: 42,
			name: "Alice"
		};
	}, 2000);
}

const user = getUser();

console.log(user);
*/

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
		}, 2000);
	});
}
*/

/*
checkUsername("alice").then(function(message) {
	console.log(message);
})
*/

/*
checkUsername("").then(function(message) {
	console.log(message);
}).catch(function(error) {
	console.log("Error: ", error);
});

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
		}, 2000);
	});
}

fetchUser(42).then(function(user) {
	console.log("User retrieved successfully.");
	console.log(user);
	console.log("Name:", user.name);
	console.log("Role:", user.role);
}).catch(function(error) {
	console.log("Failed to retrieve user:", error.message);
});

console.log("The application can continue doing other work.");
