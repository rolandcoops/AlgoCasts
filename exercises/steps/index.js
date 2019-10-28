// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let step = ''
//     for (let col = 0; col < n; col++) {
//       if (col <= row) step += '#'
//       else step += ' '
//     }
//     console.log(step)
//   }
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i).padEnd(n, ' '))
//   }
// }

// function steps(n) {
//   let i = 0
//   while (++i <= n) console.log('#'.repeat(i).padEnd(n, ' '))
// }

// function steps(n) {
//   const print = (i) => {
//     if (i > 1) print(i - 1)
//     console.log('#'.repeat(i).padEnd(n, ' '))
//   }
//   print(n)
// }

// function steps(n) {
//   const print = (i) => {
//     if (i > 1) print(i - 1)
//     console.log('#'.repeat(i).padEnd(n, ' '))
//   }
//   print(n)
// }

// function steps(n, i = n) {
//   if (i > 1) steps(n, i - 1)
//   console.log('#'.repeat(i).padEnd(n, ' '))
// }

function steps(n, row = 0, stair = '') {
  if (n === row) return

  if (n === stair.length) {
    console.log(stair)
    steps(n, row + 1)
    return
  }

  stair += (stair.length <= row) ? '#' : ' '
  steps(n, row, stair)
}

module.exports = steps;
