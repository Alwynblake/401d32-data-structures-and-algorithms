class HashTable{
constructor(size=[]){
this.array = new Array(size);
this.size = size
  }
}

Let HashTable = (get) => {
return key.toString().length % this.size;



  get(key){
    // index of the bucket
    let index = this.has(key);

    // if there is no bucket
    if(!this.arrays[index])return null

    for (let bucket of this.arrays[index]){
    // if key matches
    if(array [0] === key){
      // value
      return array [1]

    }}
  }
};
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






