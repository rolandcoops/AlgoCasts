// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // generate the matrix
  const arr = (len) => new Array(len).fill()
  const result = arr(n).map(() => arr(n))

  let counter = 1
  
  let sCol = 0
  let sRow = 0
  let eCol = n - 1
  let eRow = n - 1

  while (sCol <= eCol && sRow <= eRow) {
    // top row (l->r)
    for (let i = sCol; i <= eCol; i++) result[sRow][i] = counter++
    sRow++
    // right col (u->d)
    for (let i = sRow; i <= eRow; i++) result[i][eCol] = counter++
    eCol--
    // bottom row (r->l)
    for (let i = eCol; i >= sCol; i--) result[eRow][i] = counter++
    eRow--
    // left col (d->u)
    for (let i = eRow; i >= sRow; i--) result[i][sCol] = counter++
    sCol++
  }

  console.log(result)

  return result
}

module.exports = matrix;
