# Heap

A binary tree is a type of tree data structure in which each node has at most two children, which are referred to as the left child and the right child. The structure of a binary tree is such that each node can have zero, one, or two children. The nodes at the bottommost level of the tree, which do not have any children, are called leaf nodes.

## Type of binary tree

- <h3>Max Heap</h3>

  ![View Design](assets/max-heap.png)

In a Max-Heap the key present at the root node must be greater than or equal among the keys present at all of its children. The same property must be recursively true for all sub-trees in that Binary Tree. In a Max-Heap the maximum key element present at the root. Below is the Binary Tree that satisfies all the property of Max Heap.

- <h3>min Heap</h3>

  ![View Design](assets/min-heap.png)

In a Min-Heap the key present at the root node must be less than or equal among the keys present at all of its children. The same property must be recursively true for all sub-trees in that Binary Tree. In a Min-Heap the minimum key element present at the root. Below is the Binary Tree that satisfies all the property of Min Heap.

## Method

- `lookup()` O(n)
- `Delete()` O(Log N)
- `Insert()` O(Log N)

## How it works

<h3> equation to get parent, left, & right </h3>

- Arr[(i-1)/2] Returns the parent node.
- Arr[(2*i)+1] Returns the left child node.
- sArr[(2*i)+2] Returns the right child node.

## How it works

<h3> equation to get parent, left, & right </h3>
