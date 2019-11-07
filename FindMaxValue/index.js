'use strict';

const Node = require('./lib/node');

function findmaxvalue (tree) {
  if (!tree.root) {
    return
  }
  let highvalue = tree.root.value;
  function recurse(node) {
    if(node.value > highvalue) {
      highvalue = node.value;
    }
    if(node.left) { recurse(node.left)}
    if(node.right) { recurse(node.right)}
  }
  recurse(tree);
  return highvalue;
}

module.exports = findmaxvalue;