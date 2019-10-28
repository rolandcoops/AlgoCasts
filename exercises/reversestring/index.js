// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reverse().join('')
}

// function reverse(str) {
//   let nextStr = ''
//   for (let char of str) {
//     nextStr = char + nextStr
//   }
//   return nextStr
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reduce((reversed, char) => char + reversed, '')
// }

module.exports = reverse;
