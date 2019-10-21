# Array Binary Search
data-structures-and-algorithms  

[![Build Status](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/Alwynblake/401n12-data-structures-and-algorithms)

## Challenge
Write a function which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built in methods available, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
## Approach & Efficiency
1. make an instance of the array
2. iterate through the array backwards
3. insert element at index of iteration at the end of the new array
4. return the new array

## BigO
* time:O(n)

## Solution
![ll_merge image](..assets/arrayBinarySearch.JPG)