# STACK

A stack is a fundamental data structure in computer science and programming that follows the Last-In, `First-Out (LIFO)` principle. It is a collection of elements with two primary operations: push and pop. These operations are typically performed on the top of the stack.

LIFO : Last In First Out

## Method

- `lookup()` O(n)
- `pop()` O(1)
- `push()` O(1)
- `peek()` O(1)

## Arrays vs Linked list for Stack


<h3>ARRAY</h3>
Pro:<br>
Array allow something called `cache locality`, which makes them technically `faster` when accesing its items in memmory because they sit next to eachother.


Cons:<br>
it has `limited` memory

---

<h3>LINKED LIST</h3>

Pro:<br>
it has `dynamic` memory


Cons:<br>
linked list will little bit `slower` since the input its scater around the memory.
link lists will have `extra memory` associated with them because we have to hold on to those pointers.
