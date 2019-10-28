// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charMap = [...str]
//     .reduce((charMap, char) => {
//       if (!charMap[char]) charMap[char] = 1
//       else charMap[char]++
//       return charMap
//     }, {})

//   const [winner] = Object.entries(charMap)
//     .reduce(
//       (acc, pair) => (pair[1] > acc[1]) ? pair : acc,
//       [null, 0],
//     )

//   return winner
// }

function maxChar(str) {
  const charMap = {}

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  let winner = '', winnerCount = 0

  for (let char in charMap) {
    if (charMap[char] > winnerCount) {
      winner = char
      winnerCount = charMap[char]
    }
  }

  return winner
}

module.exports = maxChar;
