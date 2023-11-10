class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // add value
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // remove a value
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
      this.first = null;
      this.length = 0;
      return;
    } else {
      this.first = this.first.next;
      this.length--;
    }
  }
  peek() {
    return this.first.value;
  }
  list() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
console.log(myQueue.peek());
