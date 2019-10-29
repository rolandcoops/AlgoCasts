// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const mid = n - 1
//   for (let row = 0; row < n; row++) {
//     let lvl = ''

//     for (let col = 0; col < (2 * n) - 1; col++) {
//       if (col >= mid - row && col <= mid + row) lvl += '#'
//       else lvl += ' '
//     }
  
//     console.log(lvl)
//   }
// }

// function pyramid(n, row = 0, level = '') {
//   if (row === n) return

//   const len = level.length

//   if (len === 2 * n - 1) {
//     console.log(level)
//     pyramid(n, row + 1)
//     return
//   }

//   const mid = n - 1
//   level += (len >= mid - row && len <= mid + row) ? '#' : ' '
//   pyramid(n, row, level)
// }

function pyramid(n, lvl = n) {
  if (lvl > 1) pyramid(n, lvl - 1)

  let step = '#'
    .repeat((2 * lvl) - 1)
    .padStart((n + lvl) - 1, ' ')
    .padEnd((2 * n) - 1, ' ')

  console.log(step)
}

module.exports = pyramid;
