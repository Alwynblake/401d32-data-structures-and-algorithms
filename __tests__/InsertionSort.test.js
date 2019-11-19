'use strict';


const tree = new SearchTree();

tree.root = new Node(20);

tree.insert(tree.root, 8);
tree.insert(tree.root, 22);
tree.insert(tree.root, 4);
tree.insert(tree.root, 12);
tree.insert(tree.root, 10);
tree.insert(tree.root, 14);

// console.log(JSON.stringify(tree));
const node = findNextLargestNode(tree.root, tree.root.left);
console.log(node);