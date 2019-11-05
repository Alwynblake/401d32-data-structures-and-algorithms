'use strict';
const Node = require('./lib/node.js');

module.exports = function fizzBuzzTree(tree) {

  let _walk = (node) => {
    if (node.left) { _walk(node.left); }

    if (node.value % 15 === 0) { node.value = 'FizzBuzz'; }
    else if (Node.value % 5 === 0) { node.value = 'Buzz'; }
    else if (node.value % 3 === 0) { node.value = 'Fizz'; }

    if (node.right) { _walk(node.right); }
  };

  _walk(tree.root);

  return tree;
};
