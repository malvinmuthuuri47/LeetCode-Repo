// This module is meant to help the learner understand the concept
// of sleep and implement it using JavaScript

function sleep(ms) { setTimeout(() => {}, ms) };

async function run() {
	console.log("Hello");
	await sleep(2000);
	console.log("World!");
}

run();
