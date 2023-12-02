class MinHeap {
  constructor() {
    this.heap = [];
  }
  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
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
  swap(indexone, indextwo) {
    const temp = this.heap[indexone];
    this.heap[indexone] = this.heap[indextwo];
    this.heap[indextwo] = temp;
  }
  // -- function maintainer --
  //   heapifyUp() {
  //     let currentIndex = this.heap.length - 1;
  //     while (this.heap[currentIndex] < this.parent(currentIndex)) {
  //       this.swap(currentIndex, this.getParentIndex(currentIndex));
  //       currentIndex = this.getParentIndex(currentIndex);
  //     }
  //   }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  //   heapifyDown() {
  //     let index = 0;
  //     while (this.hasLeftChild(0)) {
  //       let smalerChildIndex = this.getLeftChildIndex(index);
  //       if (
  //         this.hasRightChild(index) &&
  //         this.rightChild(index) < this.leftChild(index)
  //       ) {
  //         smalerChildIndex = this.getRightChildIndex(index);
  //       }
  //       if (this.heap[index] < this.heap[smalerChildIndex]) {
  //         break;
  //       } else {
  //         this.swap(index, smalerChildIndex);
  //       }
  //       index = smalerChildIndex;
  //     }
  //   }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  remove() {
    const temp = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return temp;
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

const myMinHeap = new MinHeap();
myMinHeap.add(69);
myMinHeap.add(40);
myMinHeap.add(90);
myMinHeap.add(50);
myMinHeap.add(7);
myMinHeap.add(70);
myMinHeap.add(42);
myMinHeap.remove();

// myMaxHeap.remove();
// myMaxHeap.remove();
// myMaxHeap.remove();

console.log(myMinHeap.heap);
