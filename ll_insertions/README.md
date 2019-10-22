# Linked List Insertions
data-structures-and-algorithms

[![Build Status](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms)

## Challenge

Writes the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
## Approach & Efficiency
* Work with singly linked lists and perform an `append`, `insertBefore`, `insertAfter`.
* Traverse from the first node to last node in the list until given node is found.
* The BigO is O(n)

## Solution
![](../assets/ll_insertions.jpg)