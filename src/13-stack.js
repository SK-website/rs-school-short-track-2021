/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.data.length === 0) return undefined;
    return this.data.pop();
  }

  peek() {
    if (this.data.length === 0) return undefined;
    const value = this.data.pop();
    this.data.push(value);
    return value;
  }
}

module.exports = Stack;
