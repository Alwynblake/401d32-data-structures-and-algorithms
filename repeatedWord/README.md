# Repeated Word
This program takes a block of text represented as a string and returns the
first repeated word from that text.


## Challenge
- Write a function that accepts a lengthy string parameter.
- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
* Split a given string between words. 
* Declare a hashmap to collect the unique words. 
* Loop though each word, checking if the current word is in the hashmap. 
* Before the loop ends, put the current word as a key in our hashmap. 


Time complexity is linear: O(n).


## Solution