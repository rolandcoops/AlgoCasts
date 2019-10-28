// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunks = []
//   for (let element of array) {
//     const last = chunks[chunks.length - 1]

//     if (!last || last.length === size) chunks.push([element])
//     else last.push(element)
//   }
//   return chunks
// }

function chunk(array, size) {
  let chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

// function chunk(array, size, chunks = []) {
//   if (!array.length) return chunks
//   chunks.push(array.slice(0, size))
//   return chunk(array.slice(size), size, chunks)
// }

module.exports = chunk;
