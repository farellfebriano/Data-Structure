## LINKED LIST

# How to delete a node my version

```javascript
var deleteNode = function (node) {
  console.log(node);
  if (!head) {
    return head;
  }
  let current = head;
  let prev = null;
  while (head) {
    if (current.val === node) {
      if (prev === null) {
        head = null;
        return head;
      } else {
        const future = current.next;
        prev.next = future;
        return head;
      }
    }
    prev = current;
    current = current.next;
  }
};
```
