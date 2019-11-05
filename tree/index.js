'use strict';

const Node = require('./lib/node');

function inOrder(node) {
  if (node !== null)
  {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  return inOrder;
}

function preOrder(node) {
  if (node !== null)
  {
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  return preOrder;
}

function postOrder(node) {
  if (node !== null)
  {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
  return postOrder;
}





