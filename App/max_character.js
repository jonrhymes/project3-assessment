// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// Hint use an object as a frequency counter (google it)
// {a: 1, b: 1, c: 7, d:1}
// For of loops are for array, for in loops are for objects

function maxChar(string) {
    const frequency = {}
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

console.log(maxChar("apple 1231111")) // { '1': 5, '2': 1, '3': 1, a: 1, p: 2, l: 1, e: 1, ' ': 1 }
console.log(maxChar("abcccccccd")) // { a: 1, b: 1, c: 7, d: 1 }