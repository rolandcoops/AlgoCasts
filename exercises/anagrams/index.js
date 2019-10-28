// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const strip = (str) => str.replace(/[^\w]/g, '').toLowerCase()

//   const strippedA = strip(stringA)
//   const strippedB = strip(stringB)

//   // if A and B don’t contain equal amount of (stripped) chars, abort early
//   if (strippedA.length !== strippedB.length) return false

//   const map = (chars) => chars.reduce((map, char) => {
//     if (!map[char]) map[char] = 1
//     else map[char]++
//     return map
//   }, {})

//   const charsA = map([...strippedA])
//   const charsB = map([...strippedB])

//   for (char in charsA) {
//     if (charsA[char] !== charsB[char]) return false
//   }

//   return true
// }

function anagrams(stringA, stringB) {
  const map = (str) => {
    const charMap = {}
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
  }

  const charsA = map(stringA)
  const charsB = map(stringB)

  if (Object.keys(charsA).length !== Object.keys(charsB).length) return false

  for (char in charsA) {
    if (charsA[char] !== charsB[char]) return false
  }

  return true
}

// // slower solution but more sussinct
// function anagrams(stringA, stringB) {
//   const getChars = (str) => str.toLowerCase().match(/\w/g).sort()

//   const charsA = getChars(stringA)
//   const charsB = getChars(stringB)
//   return charsA.length === charsB.length
//     && charsA.every((char, i) => char === charsB[i])
// }

module.exports = anagrams;
