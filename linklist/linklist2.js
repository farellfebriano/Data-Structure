// LINKED LIST

// The look of the linklist without any function
// 10--->5--->16
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        head: {
          value: 10,
          next: {
            value: 5,
            next: {
              head: {
                value: 10,
                next: {
                  value: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

//  create a node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  list() {
    let head = this.head;
    while (head) {
      console.log(`${head.value}-->`);
      head = head.next;
    }
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    if (index > this.length - 1) {
      console.log("index out of bound");
      return;
    }
    let curentNode = this.traverseToIndex(index);
    newNode.next = curentNode.next;
    curentNode.next = newNode;
    this.length++;
  }
  traverseToIndex(index) {
    let curentNode = this.head;
    let j = 0;
    while (j !== index - 1) {
      curentNode = curentNode.next;
      j++;
    }
    return curentNode;
  }
  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const curentNode = this.traverseToIndex(index);
    //console.log(curentNode);
    const deleteNode = curentNode.next;
    //console.log(deleteNode);
    curentNode.next = deleteNode.next;
    this.length--;
  }
  reverse() {
    if (!this.head) {
      return this.head;
    }
    this.tail = this.head;
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinklist = new LinkedList(0);
myLinklist.append(1);
myLinklist.append(2);
myLinklist.append(3);
myLinklist.append(4);
myLinklist.reverse();
myLinklist.list();
