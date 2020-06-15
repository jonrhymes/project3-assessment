// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Hint Math.sign or -1 is a negative greater than 0 or less than 0


console.log(Math.sign(15)) // Returns 1 (positive sign)
console.log(Math.sign(-15)) // Returns -1 (negative sign)

let num = -15
console.log(num.toString()) // Takes interger and makes it into a string. Ex: '-15'

console.log(num.toString().split('')) // Splits interger into elements. Ex: ['-', '1', '5']

console.log(num.toString().split('').reverse()) // Reverses the order of elements. Ex: ['5', '1', '-']

console.log(num.toString().split('').reverse().join('')) // Joins the elements into a single string. Ex: '51-'

console.log(parseFloat(num.toString().split('').reverse().join(''))) // Parse Float returns string back into an interger, BUT it removes the negative sign

console.log(parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)) // Adds the negative sign by multiplying the final interger by the sign of the original num


const reverseInt = (num) => {
    const reversed = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    return reversed;
}

console.log(reverseInt(-15)) // = -51
console.log(reverseInt(981)) // = 189
console.log(reverseInt(500)) // = 5
console.log(reverseInt(-90)) // = -9