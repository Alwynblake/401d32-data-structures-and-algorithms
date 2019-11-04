'use strict';

class Stack {
  constructor() {
    this.top = null;
  }
  push(value){
    let node = new Node(value);
    node.next=this.top;
    this.top=node;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }
  peek(){
    if(!this.top) {
      return null;
    }
    return this.top.value;
  }
}

module.exports = Stack;