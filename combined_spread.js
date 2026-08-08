const fruits = ['apple', 'banana', 'cherry']
const vegetables = ['carrot', 'broccoli']
const moreFruits = ['mango', 'grape']

// Without spread - arrays nested inside arrays
const combined = [fruits, vegetables]
console.log('Without spread. Arrays nested inside arrays')
console.log('Combined without spread: ', combined)

// With spread - values merged into one flat array
const combined_arr = [...fruits, ...vegetables, ...moreFruits]
console.log('With spread.')
console.log('Combined with spread: ', combined_arr)
