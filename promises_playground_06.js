function createUser() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve('User created successfully');
		}, 1000);
	});
}

function uploadPhoto() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			reject('Photo upload failed');
		}, 2000);
	});
}

Promise.allSettled([createUser(), uploadPhoto()])
.then(function(results) { console.log(results); });
