export function quickselectMedian(arr) {
    const L = arr.length, halfL = L/2;
    if (L % 2 == 1)
       return quickselect(arr, halfL);
    else
       return 0.5 * (quickselect(arr, halfL - 1) + quickselect(arr, halfL));
 }
 
 function quickselect(arr, k) {
    // Select the kth element in arr
    // arr: List of numerics
    // k: Index
    // return: The kth element (in numerical order) of arr
    if (arr.length == 1)
       return arr[0];
    else {
       const pivot = arr[0];
       const lows = arr.filter((e)=>(e<pivot));
       const highs = arr.filter((e)=>(e>pivot));
       const pivots = arr.filter((e)=>(e==pivot));
       if (k < lows.length) // the pivot is too high
          return quickselect(lows, k);
       else if (k < lows.length + pivots.length)// We got lucky and guessed the median
          return pivot;
       else // the pivot is too low
          return quickselect(highs, k - lows.length - pivots.length);
    }
 }