'use strict';

function binarySearch(arr, value) {

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      value = i;
    }
  }
  if(i >= 0){
    return i;
  } else {
    return -1;
  }
}

module.exports = binarySearch;