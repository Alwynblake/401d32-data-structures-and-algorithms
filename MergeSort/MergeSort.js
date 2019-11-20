'use strict';

function mergeSort(arr) {
  if (array.length > 1) {
    const {
      length
    } = arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle), low);
    const right = mergeSort(arr.slice(middle, length), low);

  }
  return arr;
}



