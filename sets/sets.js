const arr = [1, 2, 3, 4, 5];
let sets = new Set(arr);

sets.add(6); // { 1, 2, 3, 4, 5, 6 }
sets.has(4); // true
const b = Array.from(sets); //[1, 2, 3, 4, 5, 6]
