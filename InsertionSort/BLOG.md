### BLOG.md

**** Problem: 
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. 
the step-by-step output after each iteration through some sort of visual.

``` 
SelectionSort(int []arr)   
    DECLARE n <-- arr.Length; 
    FOR i = 0; i to n - 1  
        DECLARE min <-- i; 
        FOR j = i + 1 to n 
            if (arr[j] < arr[min]) 
                min <-- j; 
 
            DECLARE temp <-- arr[min]; 
            arr[min] <-- arr[i]; 
            arr[i] <-- temp;      
```
Sample:				
* Input Array: [8,4,23,42,16,15]		
* Output Array: [4,8,15,16,23,42]

Algorithm:
* Declare some variable for the pointer to nodes.
* Traverse our linkedList.
* Reassign pointers for each iteration of our while loop
* While we evaluate if there is a smaller number in the array than what is currently present in index i,  
we swap it with the previous node until the previous node is smaller then  current node; and current node is less than next.
* Return the new linkedList

![](../assets/)