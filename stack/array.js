class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    if (!this.array.length) {
      console.log("array is empty");
      return;
    }
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  list() {
    for (let i of this.array) {
      console.log(i);
    }
  }
}
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.pop();
console.log(myStack.peek());
myStack.list();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.list();
// console.log(myStack.isEmpty());
// console.log(myStack.peek());
