var expect = function(val) {
	
	return {
		toBe(another_val) {
			if (another_val === val) {
				return true;
			}
			else {
				throw new Error("Not Equal");
			}
		},
		notToBe(another_val) {
			if (another_val !== val) {
				return true;
			}
			else {
				throw new Error("Equal");
			}
		}
	}
};

// console.log(expect(5).toBe(5))
// console.log(expect(5).notToBe(3))

func = () => expect(5).toBe(5)
// func = () => expect(5).toBe(null)
console.log(func())
