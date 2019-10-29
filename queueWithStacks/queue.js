class Queue {
  constructor(){
    this.front=null;
    this.back=null;
  }
  enqueue(value){
    let node=new Node(value);
    if(this.front) {
      this.back.next = node;
      this.back = node;
    }else{
      this.front=node;
      this.back=node;
    }
  }
  dequeue(){
    if(!this.front) {
      return null;
    }
    let dequeued=this.front.value;
    this.front=this.front.next;
    if(!this.front){
      this.back=null;
    }
    return dequeued;
  }
  peek(){
    if(!this.front){
      return null;
    }
    return this.front.value;
  }
}

module.exports = Queue;