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
    return this.head
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this._size++
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next
      this._size--
    }
  }

  /**
   * Last
   */

  getLast() {
    let cur = this.head

    if (!cur) return null

    while (cur.next) cur = cur.next

    return cur
  }

  insertLast(data) {
    const newNode = new Node(data)
    const last = this.getLast()

    if (last) last.next = newNode
    else this.head = newNode

    this._size++
  }

  removeLast() {
    let prev = null
    let cur = this.head

    // if no head, exit early
    if (!cur) return

    // while there is a next node
    while (cur.next) {
      prev = cur
      cur = cur.next
    }

    if (prev) prev.next = null
    else this.head = null

    this._size--
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
    // these rules (< 0 and > size cases) are weird but included in tests…
    if (index <= 0) return this.insertFirst(data) // add head
    if (index >= this.size()) return this.insertLast(data) // add tail

    let prev = this.getAt(index - 1)

    prev.next = new Node(data, prev.next)
    this._size++
  }

  removeAt(index) {
    if (index === 0) return this.removeFirst() // remove head

    let prev = this.getAt(index - 1)

    // if prev === null then list is empty
    // if prev.next === null then index is out of bounds
    if (prev && prev.next) {
      prev.next = prev.next.next
      this._size--
    }
  }

  /**
   * Other
   */
}

module.exports = { Node, LinkedList }
