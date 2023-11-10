# QUEUES

A queue is a common data structure in computer science and programming that is used to store and manage a collection of elements. It follows the principle of `First In Firs Out (FIFO)`, which means that the first element added to the queue will be the first one to be removed.

FIFO : First In First Out

## Method

- `lookup()` O(n)
- `enqueue()` O(1)
- `denqueue()` O(1)
- `peek()` O(1)

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

![View Design](implementing-queues-with-stack.png)
