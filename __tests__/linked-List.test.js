'use strict';

const LinkedList  = require('../linked-list /index');

describe('Testing LinkedList data structure', () => {

  test('Testing that LinkedList inserts() method inserts into the head if it is empty', () => {
    const linkedList = new LinkedList();
    // save it on the new linkedlist class instance
    linkedList.insert(5);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next).toEqual(null);
  });

  test('Testing that LinkedList append() method inserts a node into the linked list if the head is not empty', () => {
    const linkedList = new LinkedList();
    linkedList.insert(5);
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(3);
