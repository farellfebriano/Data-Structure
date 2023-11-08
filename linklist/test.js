// javascript program to reverse a doubly linked list

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}
/* Function to reverse a Doubly Linked List */
function reverse() {
  var temp = null;
  var current = head;

  /*
   * swap next and prev for all nodes of doubly linked list
   */
  while (current != null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  /*
   * Before changing head, check for the cases like empty list and list with only
   * one node
   */
  if (temp != null) {
    head = temp.prev;
  }
}
