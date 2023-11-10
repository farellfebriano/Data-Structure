class Queue {
  constructor() {
    this.popArr = [];
    this.pushArr = [];
    this.length = 0;
  }
  enqueue(element) {
    this.pushArr.push(element);
    this.length++;
    return this;
  }
  dequeue() {
    const length = this.pushArr.length;
    if (this.length === 0) {
      console.log("queue is empy");
      return null;
    }
    if (this.popArr.length === 0) {
      for (let i = 0; i < length; i++) {
        this.popArr.push(this.pushArr.pop());
      }
    }
    this.popArr.pop();
    this.length--;
    return this;
  }
  peek() {
    if (this.popArr.length > 0) {
      return this.popArr[this.popArr.length - 1];
    }
    return this.pushArr[0];
  }
  size() {
    return this.length;
  }
  printQueue() {}
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.dequeue();
myQueue.dequeue();

console.log("poparr: ", myQueue.popArr);
console.log("pusharr: ", myQueue.pushArr);
console.log("length: ", myQueue.length);
console.log(myQueue.peek());
