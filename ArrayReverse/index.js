'use strict';

function reverseArray(arr) {
  const reversedArr = new Array (arr.length).fill();
  for(let i=arr.length-1;1>=0;i--) {
    reversedArr[arr.length-i-1]= arr[i];
  }
  return (reversedArr);
}

module.exports = reverseArray;
