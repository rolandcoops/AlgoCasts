// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this._size = 0
  }

  size() {
    return this._size
  }

  clear() {
    this.head = null
    this._size = 0
  }

  /**
   * First
   */

  getFirst() {
    return this.getAt(0)
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  removeFirst() {
    this.removeAt(0)
  }

  /**
   * Last
   */

  getLast() {
    return this.getAt(this.size() - 1)
  }

  insertLast(data) {
    this.insertAt(data, this.size())
  }

  removeLast() {
    this.removeAt(this.size() - 1)
  }

  /**
   * At
   */

  getAt(index) {
    if (index < 0 || index >= this.size()) return null

    return this._getAt(index)
  }
  _getAt(index, cur = this.head) {
    if (index === 0 || !cur) return cur

    return this._getAt(index - 1, cur.next)
  }

  insertAt (data, index) {
    if (!this.head) {
      this.head = new Node(data);
    } else if (index <= 0) {
      this.head = new Node(data, this.head);
    } else {
      // allows inserting at last index for out of bounds cases
      let prevIndex = Math.min(index, this.size()) - 1
      let prev = this.getAt(prevIndex) || this.getLast()
      prev.next = new Node(data, prev.next)
    }

    this._size++
  }

  removeAt(index) {
    if (!this.head) {
      return
    } else if (index === 0) {
      this.head = this.head.next
    } else {  
      let prev = this.getAt(index - 1)
      // if prev === null then list is empty
      // if prev.next === null then index is out of bounds
      if (!prev || !prev.next) return
      prev.next = prev.next.next
    }
    this._size--
  }

  /**
   * Other
   */
}

module.exports = { Node, LinkedList }
