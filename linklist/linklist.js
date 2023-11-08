// creating the node that consist of the head and and the next
// i need to make the next null in default
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first Node
  insertFirstNode(data) {
    // 1.) if the node is empty it will act as the first object
    // 2.) if ther is node that is exist already it will push the other data and insert the new
    //     data as the head 200 --> 100
    this.head = new Node(data, this.head);
    this.size += 1;
  }
  // insert last Node
  // this is wrong because it using the loop and makes it o(n) it should be 0(1)
  insertLast(data) {
    let node = new Node(data);
    let current;
    // if empty, make the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next);
      current = current.next;
    }
    current.next = node;
    this.size += 1;
  }
  // insert at index
  insertAt(data, index) {
    // if the index is ot of range
    if (index > this.size && index > 0) {
      console.log("index out of range");
      return;
    }
    // if index is equal===0 reuse the code insert in the
    // begining of the linklist
    if (index === 0) {
      this.insertFirstNode(data);
      return;
    }
    // insert at the specifixt index
    let node = new Node(data);
    let current, previous, count;
    current = this.head;
    count = 0;
    while (count < index) {
      previous = current; //node the index that we want to index
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
  }
  // get at index
  getAtIndex(index) {
    let count, current;
    count = 0;
    current = this.head;
    if (index > this.size) {
      return console.log(`index is out of range`);
    }
    while (count < index) {
      current = current.next;
      count++;
    }
    return console.log(`${index} --> ${current.data}`);
  }
  // delete node with index
  deletAt(index) {
    let current, count, previous;

    // if the index out of range
    if (index > 0 && index > this.size) {
      return console.log(`index is out of range`);
    }
    // if the index is 0
    if (index === 0) {
      current = this.head;
      this.head = current.next;
      this.size--;
      return;
    }
    // delete a node in specific index
    count = 0;
    current = this.head;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.size--;
  }
  // print the list data
  printListData() {
    let current = this.head;
    // if current is not null
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log(`size --> ${this.size}`);
  }
  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();
ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertFirstNode(300);
ll.insertFirstNode(400);
ll.insertFirstNode(500);

ll.printListData();
ll.clearList();
ll.printListData();
