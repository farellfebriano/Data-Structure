class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = this.bottom;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return;
  }
  pop() {
    this.top = this.top.next;
    this.length--;
    return;
  }
  list() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value, "->");
      currentNode = currentNode.next;
    }
  }
  isEmpty() {
    return !!!this.length;
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
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.list();
console.log(myStack.isEmpty());
// console.log(myStack.peek());
