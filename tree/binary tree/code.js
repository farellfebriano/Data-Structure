class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      //leff newnode < current
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        //righ newNode > current
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  lookup(value) {
    let current = this.root;
    if (!this.root) {
      console.log("the tree is empty");
      return null;
    }
    while (true) {
      if (!current) {
        console.log("node is cannot be found");
        return null;
      }
      // if the node is equal value
      else if (current.value === value) {
        return current;
      }
      //left
      else if (value < current.value) {
        console.log("left");
        current = current.left;
      } else {
        //right
        console.log("right");
        current = current.right;
      }
    }
  }
  // for the remove we need to use the same lookp function but with little bit additional memory for remembering the previous node
  // we need to find the corect node
  remove() {
    if (!this.root) {
      console.log("tree is empty");
      return null;
    }
    let current = this.root;
    while (true) {
      if (!current) {
        console.log("node cannot be found");
      }
      // curent == value
      else if (current.value === value) {
        const nextleft = current.left;
        const nextrigt = current.right;
      }
      //left
      else if (value < current.value) {
        console.log("left");
        current = current.left;
      }
      //right
      else {
        console.log("right");
        current = current.right;
      }
      //creating a memory for the previous node
      // need to make it at last so it remembers the previous node
      const previous = current;
    }
  }
}

//             9
//        4        20
//      1   6    15   170
//    0                  180

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const myBinarySearch = new BinarySearchTree();
myBinarySearch.insert(9);
myBinarySearch.insert(20);
myBinarySearch.insert(4);
myBinarySearch.insert(1);
myBinarySearch.insert(-1);
myBinarySearch.insert(15);
myBinarySearch.insert(6);
myBinarySearch.insert(170);
myBinarySearch.insert(180);
myBinarySearch.insert(2000);
console.log(myBinarySearch.lookup(-1));
// console.log(JSON.stringify(traverse(myBinarySearch.root)));
