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

  kthFromEnd(k) {

    let counter = 1;
    let current = this.head;

    while (current.next) {
      current = current.next;
      counter++;
    }

    let positionOfK = counter - k;

    if (positionOfK === 0) {
      return this.head.value;
    } else if (positionOfK < 0) {
      return 'k is too large a number';
    } else {
      counter = 0;
      current = this.head;

      while (counter < positionOfK) {
        current = current.next;
        counter++;
      }
      return current.value;
    }
  }
}

module.exports = LinkedList;