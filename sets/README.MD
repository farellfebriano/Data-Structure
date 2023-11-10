# SETS

In JavaScript, a Set is a built-in object that represents a collection of unique values. The main characteristics of a Set are:

1. Uniqueness: A Set can only contain unique values. If you try to add a value that is already present, it won't be added again.
2. Iteration: Elements in a Set are ordered based on their insertion order. You can iterate over the elements in the order they were added.
3. Value Equality: Unlike in objects or arrays, values are considered equal if they are of the same value, without any implicit type conversion.

## How to initiate

```javascript
const arr = [1, 2, 3, 4, 5];
let sets = new Set(arr);
```

## Method

- `delet()` O(1)
- `add()` O(1)
- `clear()` O(1)
- `new Set(array)` O(n)

## Arrays vs Linked list for Stack

<h3>ARRAY</h3>

Cons:<br>
You wouldnt want to build queue with array. Because arrays have indexes associated with them. Hence, when we dequeue, we need to loop over the array to fill the index 0. This operation will increate the time complexity into `O(n)` while we want the proces of dequeue is `O(1)`

---

<h3>LINKED LIST</h3>

Pro:<br>
When we create a queue, it is BEST using linklit since it dosent have index a associated with them. Instead they used a pointers which is `head` and `tail` . Also unshift a linklist is `O(1)` hence it suit the time complexity that is listed above.

---

# Implemeting Queue with Stacks

![View Design](assets/implementing-queues-with-stack-2.png)

In queue that uses a stacts, we will use `two array` that will mimic an queue.

```javascript
  constructor() {
    this.popArr = [];
    this.pushArr = [];
    this.length = 0;
  }
```

### Enqueue

When we enqueue a value, it will always pushed to the pushAray

```javascript
  enqueue(element) {
    this.pushArr.push(element);
    this.length++;
    return this;
  }
```

### Dequeue

When dequeue method called it will do two different things with 2 different condition. The first condition is
when the popArr is empty and not empty.

popArr is empty<br>

1. The method will iterate all the value to the popArr array with using build in push and pop method.
2. Then it will erase the last value from the popArr array using pop() method

popArr is not empty<br>

1. It will erase the last value from the popArr array using pop() method

```javascript
 dequeue() {
    const length = this.pushArr.length;
    if (this.length === 0) {
      console.log("queue is empy");
      return null;
    }
    if (this.popArr.length === 0) {
      for (let i = 0; i < length; i++) {
        this.popArr.push(this.pushArr.pop());
      }
    }
    this.popArr.pop();
    this.length--;
    return this;
  }
```
