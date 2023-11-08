class myArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }
  // get data with specific index
  get(index) {
    return this.data[index];
  }
  // add item to the tail
  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
  }
  // delete last item in the array
  pop() {
    const lastItem = this.data[this.data.lenght];
    delete this.data[this.lenght - 1];
    return `delete last item ${lastItem}`;
  }
  delete(index) {
    this.deleteShift(index);
    this.lenght--;
    delete this.data[this.lenght - 1];
  }
  insert(index, value) {
    this.insertShift(index, value);
  }
  insertShift(index, value) {
    for (let i = this.lenght; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
  }
  //shift the value to the left of start from the index that is given
  deleteShift(index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[index] = this.data[i + 1];
    }
  }
}

const myArray1 = new myArray();
myArray1.push("hi"); //{ '0': 'hi' }
myArray1.push("ola"); //{ '0': 'hi', '1': 'ola' }
myArray1.push("bello"); //{ '0': 'hi', '1': 'ola', '2': 'bello' }
myArray1.insert(1, "gai"); //{ '0': 'hi', '1': 'gai', '2': 'ola', '3': 'bello' }

console.log(myArray1.data);
