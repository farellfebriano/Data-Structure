class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinlist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  _traverse(index) {
    let currentHead = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentHead = currentHead.next;
    }
    return currentHead;
  }
  list() {
    let head = this.head;
    while (head) {
      console.log(`${head.value}-->`);
      head = head.next;
    }
  }
  reverseList() {
    let tail = this.tail;
    while (tail.previous) {
      console.log(`${tail.value}-->`);
      tail = tail.previous;
    }
    console.log(`${tail.value}-->`);
  }
  append(value) {
    const newNode = new Node(value);
    const previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.previous = previous;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insertAt(value, index) {
    if (index > this.length - 1 && index < 0) {
      console.log("the index is out of range");
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    }
    const leader = this._traverse(index);
    const newNode = new Node(value);
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
  }
  delete(index) {
    if (index > this.length - 1 && index < 0) {
      console.log("the index is out of range");
      return;
    } else if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      return;
    }
    const currentNode = this._traverse(index);
    const deletNode = currentNode.next;
    const nextNode = deletNode.next;
    currentNode.next = nextNode;
    nextNode.previous = currentNode;

    return;
  }
  // reverse() {
  //   if (!this.head) {
  //     return this.head;
  //   }
  //   this.tail = this.head;
  //   let current = this.head;
  //   let temp = null;
  //   while (current) {
  //     temp = current.previous;
  //     current.previous = current.next;
  //     current.next = temp;
  //     current = current.previous;
  //   }
  //   this.head = temp.previous;
  // }
  reverse() {
    if (!this.head) {
      return this.head;
    }
    let current = this.head;
    let temp;
    while (current) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;
      current = current.previous;
    }
    this.head = temp.previous;
  }
}

myDoublyLinlist = new DoublyLinlist(0);
myDoublyLinlist.append(1);
myDoublyLinlist.append(2);
myDoublyLinlist.append(3);
// myDoublyLinlist.delete(0);
// myDoublyLinlist.delete(0);
// myDoublyLinlist.delete(1);
myDoublyLinlist.reverse();
myDoublyLinlist.list();
