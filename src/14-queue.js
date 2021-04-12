// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    if (!this.first) {
      return 0;
    }
    if (this.first === this.last) {
      return 1;
    }
    let counter = 0;
    let temp = this.first;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      return temp.value;
    }
    this.first = this.first.next;

    return temp.value;
  }
}
module.exports = Queue;
