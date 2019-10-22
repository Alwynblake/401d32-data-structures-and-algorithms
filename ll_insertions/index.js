'use strict';

const Node = require('./lib/node');


class LinkedList {
  constructor() {
    // start it with an empty value
    this.head = null;

  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    // while there is a next value set that value of current to current.next
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      this.head = new Node(newValue);
      return;
    }
    let current = this.head;

    while(current.next.value !== value) {
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newValue) {

    if(!this.head) {
      this.head = new Node(newValue);
      return;
    }
    let current = this.head;
    while(current.value !== value) {
      {
        current = current.next;
      }
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }
}

module.exports = LinkedList;