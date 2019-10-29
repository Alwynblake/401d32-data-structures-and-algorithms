'use strict';

const Queue = require('../queueWithStacks/queue.js');

describe('Queue tests:', () => {
  it('Can successfully enqueue onto a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(1);
  });
  it('Can successfully enqueue multiple items into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.back.value).toEqual(4);
  });
  it('Can successfully dequeue off of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(null);
    expect(queue.back).toEqual(null);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.peek()).toEqual(1);
      }
  )}
);