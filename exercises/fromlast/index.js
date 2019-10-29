// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// function fromLast(list, n) {
//   let slow = list.getFirst()
//   let fast = list.getFirst()
//   // jump ‘fast’ to n places ahead of slow
//   while (n > 0) {
//     if (!fast) return null // out of bounds
//     fast = fast.next
//     n--
//   }
//   while (fast.next) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

function fromLast(list, n) {
  let slow = list.getFirst()
  let fast = slow

  // jump ‘fast’ to n places ahead of slow
  for (let i = 0; i <= n; i++) {
    if (!fast) return null // out of bounds
    fast = fast.next
  }

  while (fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}

module.exports = fromLast;
