// This module is meant to give the learner room to learn about promises
// and experiment on it

function getFullResponseFromAPI(success) {
	if (success === true) {
		return new Promise(function(resolve) {
			resolve({'status': 200, 'body': 'Success'});
		})
	} else {
		return new Promise(function(resolve, reject) {
			reject(new Error('The fake API is not working currently.'));
		});
	};
}

/*
getFullResponseFromAPI(true)
.then(function(response) {
	console.log(response);
})
.catch(function(error) {
	console.log(error.message);
});
*/

getFullResponseFromAPI(false)
.then(function(response) {
	console.log(response);
})
.catch(function(error) {
	console.log(error.message);
});
