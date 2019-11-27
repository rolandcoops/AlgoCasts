// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
 * Helpers
 */

// clone an array, or return an empty array for invalid values
const cloneArr = (arr) =>
  Array.isArray(arr) ? [...arr] : []

// swap two indeces in array in-place
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * Exercises
 */

function bubbleSort(arr) {
  let res = cloneArr(arr)

  // end cursor
  for (let end = res.length - 1; end >= 0; end--) {
    // scan cursor
    for (let i = 0; i < end; i++) {
      if (res[i] > res[i + 1]) swap(res, i, i + 1)
    }
  }
  
  return res
}

function selectionSort(arr) {
  let res = cloneArr(arr)

  // current cursor
  for (let cur = 0; cur < res.length - 1; cur++) {
    // index of minimum value, from current position
    let min = cur
    // scan cursor, look for any smaller value in rest of array
    for (let i = cur; i < res.length; i++) {
      if (res[i] < res[min]) min = i
    }
    // swap if nessecary
    if (min !== cur) swap(res, cur, min)
  }

  return res
}

const mergeSort = (arr) => sort([...arr])

function sort (arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = sort(arr.slice(0, mid))
  const right = sort(arr.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  let l = 0, r = 0
  let res = []

  // fastest: https://jsperf.com/merge-tests-123456
  
  // if first element on left array is less than first of right,
  // shift left and push in results. Else, shift right and push in results.
  while (l < left.length && r < right.length) {
    res.push(left[l] < right[r] ? left[l++] : right[r++])
  }
  // take everything from the array that still has values and push in results.
  while (l < left.length) res.push(left[l++])
  while (r < right.length) res.push(right[r++])


  // // From Algo course (NOTE: optimized for aux array, which is the fastest)
  // for (let l = 0, r = 0; l < left.length || r < right.length;) {
  //   // right half exhausted, push left and increment
  //   if (r > right.length)     res.push(left[l++])
  //   // left half exhausted, push right and increment
  //   else if (l > left.length) res.push(right[r++])
  //   // both halves still have values, push lowest and increment
  //   else                      res.push(left[l] < right[r] ? left[l++] : right[r++])
  // }
  
  // // SLOWER, but also works...
  // // if first element on left array is less than first of right,
  // // shift left and push in results. Else, shift right and push in results.
  // while (l < left.length && r < right.length) {
  //   res.push(left[l] < right[r] ? left[l++] : right[r++])
  // }
  // // take everything from the array that still has values and push in results.
  // res.push(...left.slice(l), ...right.slice(r))

  return res
}

// not in-place, so pretty crappy as far as optimization goes
const quickSort = (arr) =>
  _quickSort([...arr])
const _quickSort = (arr) => {
  if (arr.length <= 1) return arr
  const pivot = arr.pop() // convention to take last element as pivot
  const left = []
  const right = []
  for (let item of arr) {
    if (item < pivot) left.push(item)
    else              right.push(item)
  }
  return [..._quickSort(left), pivot, ..._quickSort(right)]
}

// const quickSortAlt = (arr) =>
//   _quickSortAlt([...arr])
// const _quickSortAlt = (arr) => {
//   if (arr.length <= 1) return arr
//   const pivot = arr[arr.length - 1] // convention to take last element as pivot
//   const left = []
//   const right = []
//   for (let i = 0; i < arr.length - 1; i++) {
//     const item = arr[i]
//     if (item < pivot) left.push(item)
//     else              right.push(item)
//   }
//   return [..._quickSortAlt(left), pivot, ..._quickSortAlt(right)]
// }

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
