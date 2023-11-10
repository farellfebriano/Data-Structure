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
