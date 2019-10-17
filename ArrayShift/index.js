'use strict';

const Node = require('./lib/node');

class ArrayShift {
  constructor() {
    // start it with an empty value
    this.head = null;
  }

  insertAfter(value, newValue) {

    if (!this.head) {
      this.head = new Node(newValue);
      return;
    }

    let current = this.head;
    while (current.value !== value) {
      {
        current = current.next;
      }
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }
}
  module.exports = ArrayShift;