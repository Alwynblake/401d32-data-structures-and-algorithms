'use strict';

class LinkedList {
  constructor(head) {
    this.head=head
  }
  generateNextFibNode(){
    let current=this.head;// on every step of the traversal set current to the next node. set prev to the current node.
    let prev=null;
    while(current.next !==null){
      prev=current;
      current=current.next;
    }
    new node(
    this.append(current.value+prev.value), null)
  }
}