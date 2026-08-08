// Without spread - passing an array to a function that expects individual values

const scores = [85, 92, 78, 96, 88]

console.log('Manual unpacking: ', Math.max(85, 92, 78, 96, 88))
console.log('Trying to use an array: ', Math.max(scores))

// With spread - unpack the array into individual values automatically
console.log('Unpacking an array: ', Math.max(...scores))
