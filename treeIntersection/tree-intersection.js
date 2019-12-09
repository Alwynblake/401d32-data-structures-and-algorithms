'use strict';

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;

  }
  search(node, data)
  {

    if(node === null)
      return null;

    else if(data < node.data)
      return this.search(node.left, data);


    else if(data > node.data)
      return this.search(node.right, data);


    else
      return node;
  }
}