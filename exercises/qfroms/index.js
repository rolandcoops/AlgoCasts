// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor () {
    this.stack = new Stack()
    this.aux = new Stack()
  }

  add (val) {
    this.stack.push(val)
  }

  remove () {
    while (this.stack.peek()) this.aux.push(this.stack.pop())
    const result = this.aux.pop()
    while (this.aux.peek()) this.stack.push(this.aux.pop())
    return result
  }

  peek () {
    while (this.stack.peek()) this.aux.push(this.stack.pop())
    const result = this.aux.peek()
    while (this.aux.peek()) this.stack.push(this.aux.pop())
    return result
  }
}

module.exports = Queue;
