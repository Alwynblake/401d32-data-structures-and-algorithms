'use strict';

const hash = (key, size) => {
  let hashedkey = 0;

  for (let i=0;i<key.length;i++) {
    hashedkey = key.charCodeAt(i)
  }
  return hashedkey % size
};

class HashTable{
  constructor(){
    this.buckets = Array(this.size);
    this.size = 50;

    for (let i=0;i< this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }
}