class MaxHeap {
  constructor() {
    this.heap = [];
  }
  //  --helper method--

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  getParentIndex(childInex) {
    return Math.floor((childInex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  // -- function maintainer --
  heapifyup() {
    // catch the just add node in the end of the node
    let curNodeIndex = this.heap.length - 1;
    // check if it has a parrent and the parrent has a bigger value
    while (
      this.hasParent(curNodeIndex) &&
      this.parent(curNodeIndex) < this.heap[curNodeIndex]
    ) {
      // if its true swap the parents and the child
      this.swap(curNodeIndex, this.getParentIndex(curNodeIndex));
      curNodeIndex = this.getParentIndex(curNodeIndex);
    }
  }
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let childIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        childIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[childIndex]) {
        break;
      } else {
        this.swap(index, childIndex);
      }
      index = childIndex;
    }
  }

  // -- MAIN FUNCTION --

  // return the peek of the heap or in this case is the max
  peek() {
    if (this.heap.length < 0) {
      return null;
    }
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyup();
  }

  remove() {
    const item = this.heap[this.heap.length - 1];
    this.heap[0] = item;
    this.heap.pop();
    this.heapifyDown();
    return item;
  }
  lookup(value) {
    // O(n)
    for (let i; i < this.heap.length; i++) {
      if (this.heap[i] === value) {
        return index, value;
      }
    }
    console.log("the value is not exist");
    return null;
  }
}

const myMaxHeap = new MaxHeap();
myMaxHeap.add(69);
myMaxHeap.add(40);
myMaxHeap.add(90);
myMaxHeap.add(50);
myMaxHeap.add(7);
myMaxHeap.add(70);
myMaxHeap.add(42);
myMaxHeap.add(3);
myMaxHeap.remove();
myMaxHeap.remove();
myMaxHeap.remove();
console.log(myMaxHeap.heap);
