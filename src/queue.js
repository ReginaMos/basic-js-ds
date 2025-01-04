const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
    this.lastElem = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value);
      this.queue.next = null;

      this.lastElem = this.queue;
    } else {
      this.lastElem.next = new ListNode(value);
      this.lastElem.next.next = null;
      this.lastElem = this.lastElem.next;
    }
  }

  dequeue() {
    const returnedElem = this.queue;
    this.queue = this.queue.next;
    return returnedElem.value;
  }
}

module.exports = {
  Queue
};
