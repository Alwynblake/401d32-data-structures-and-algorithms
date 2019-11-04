# Stacks and Queues
data-structures-and-algorithms

[![Build Status](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms)

## Challenge
Created a Node class that has properties for the value stored in the Node, and a pointer to the next node.
## Approach & Efficiency
* create a method that accepts a singly link list
iterate through the link list with a current node
Each node should contain "value" -> "next"
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located on the top of the stack.
* Create a Queue class that has a top property. It creates an empty queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the stack.

* The BigO is O(n)


## Solution

![](../assets/QueueWithStacks.JPG)
