// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str === [...str].reverse().join('')
// }

// function palindrome(str) {
//   let valid = true
//   for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       valid = false
//       break;
//     }
//   }
//   return valid
// }

function palindrome(str) {
  return [...str]
    .every((char, i) => char === str[str.length - i - 1])
}



module.exports = palindrome;
