'use strict';

const Node = require('./lib/node');

class LinkedList {
  constructor() {
    // start it with an empty value
    this.head = null;
  }

  // insert at the beginning of the list/ head
  insert(value) {
  // if the list is empty
  if (!this.head) {
    this.head = this.tail = new Node(value)
  } else {
    let oldHead = this.head;
    this.head = new Node(value);
    oldHead.prev = this.head;
    this.head.next = oldHead
  }
}

// `includes takes a value and returns boolean`
   search = (value, currentNode) => {
  currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode
    }
    currentNode = currentNode.next
  }
  return true
     }





//toString returns .toString(["Node"]);
//toString() {

