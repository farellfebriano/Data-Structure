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
      // node is not exist
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
  remove(value) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    let parrent = null;
    while (current) {
      if (value < current.value) {
        parrent = current;
        current = current.left;
      } else if (value > current.value) {
        parrent = current;
        current = current.right;
        // we have a match
      } else if (value === current.value) {
        // no right child
        if (current.right === null) {
          if (parrent === null) {
            this.root = current.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (current.value < parrent.value) {
              parrent = current.left;
              //if parent < current value, make left child a right child of parent
            } else if (current.value > parrent.value) {
              parent = current.right;
            }
          }
        }
      }
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
console.log(myBinarySearch.lookup(170));
// console.log(JSON.stringify(traverse(myBinarySearch.root)));
