// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const sign = Math.sign(n)
//   if (sign === n) return n // exit early

//   // Math.abs(n).toString().split('').reverse().join('')
//   const reversed = [...`${Math.abs(n)}`].reverse().join('')
//   return sign * parseInt(reversed, 10)
// }

// function reverseInt(n) {
//   const abs = Math.abs(n)
//   if (abs / 9 <= 1) return n // exit early for single digits

//   const reversed = [...`${Math.abs(n)}`].reverse().join('')
//   return Math.sign(n) * parseInt(reversed, 10)
// }

function reverseInt(n) {
  const reversed = [...`${n}`].reverse().join('')
  return Math.sign(n) * parseInt(reversed, 10)
}


reverseInt(-90)

module.exports = reverseInt;
