'use strict';

module.exports = function breadthFirst(){
  let arrayBT = [];
  let q = new Queue;
  q.enqueue(this.root);
  while (q.peek()) {
    arrayBT.push(q.front.value);
    if (q.front.left) {
      q.enqueue(q.front.left);
    }
    if (q.front.right) {
      q.enqueue(q.front.right);
    }
    q.dequeue(q.front);
  }
  return arrayBT;

};