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

  get(key)
{
  // index of the bucket
  let index = this.has(key);

  // if there is no bucket
  if (!this.arrays[index]) return null

  for (let bucket of this.arrays[index]) {
    // if key matches
    if (array [0] === key) {
      // value
      let array;
      return array[1]
    }
  }
}
  // }
  //   return this.containsKey(key) ? this._map[key] : null;
  // },

  containsKey: function(key){
    return this._map.hasOwnProperty(key);
  },

  containsValue: function(value) {
    for (var key in this._map) {
      if (this._map.hasOwnProperty(key)) {
        if (this._map[key] === value) {
          return true;
        }
      }
    }
    return false;
  }






