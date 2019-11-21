'use strict';

const QuickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return QuickSort(lesser).concat(pivot, QuickSort(greater));

};