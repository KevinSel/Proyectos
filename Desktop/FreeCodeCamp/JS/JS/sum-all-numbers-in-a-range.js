// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.



function sumAll(arr) {
  arr.sort((a,b)=>a-b);
  let n = arr[0], m = arr[1];
  return m*(m+1)/2 - n*(n-1)/2 ;
};

sumAll([1, 4]);