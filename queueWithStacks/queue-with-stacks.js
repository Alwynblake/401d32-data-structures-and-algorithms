'use strict';

const PseudoQueue = (node) => {
  stack1.push(node);
};
pseudoDequeue (){
  while(stack1.peek) {
    stack2.push(stack1.pop());
  }
  let temp = stack2.pop();
  while(stack2.peek()){
    stack1.push(stack2.pop());
  }
}
module.exports = PseudoQueue;


