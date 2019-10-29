// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

let NEXT = 'NEXT'

function levelWidth(root) {
  if (!root) return [] // empty
  
  let widths = [0]
  let queue = [root, NEXT]

  // queue.length > 1 <-- VERY IMPORTANT (last element should always be a NEXT)
  while (queue.length > 1) {
    const node = queue.shift()

    if (node === NEXT) {
      widths.push(0)
      queue.push(NEXT)
      count = 0
    } else {
      queue.push(...node.children)
      widths[widths.length - 1]++
    }
  }

  return widths
}

// function levelWidth(root) {
//   const arr = [root, 's'];
//   const counters = [0];

//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === 's') {
//       counters.push(0);
//       arr.push('s');
//     } else {
//       arr.push(...node.children);
//       counters[counters.length - 1]++;
//     }
//   }

//   return counters;
// }

module.exports = levelWidth;
