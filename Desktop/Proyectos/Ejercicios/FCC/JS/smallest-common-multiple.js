//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.



function smallestCommons(arr) {
  let max = Math.max(arr[0],arr[1]), min = Math.min(arr[0],arr[1]), mayFactNP = [];
  //Get the list of numbers and possible factors
  for (let i = 1; i<=max; i++){
    mayFactNP.push(i);
  }
  // List of numbers 
  let nums = mayFactNP.slice(min-1);
  // Remove 1
  if (nums[0] === 1) {nums = nums.slice(1)}
  //Filter the non primes numbers
  let mayFactP = mayFactNP.slice(1).filter(x=>{
    return mayFactNP.slice(1).every(y => {if (x === y){return true};return (x%y !== 0) })})                          
  //Factorize
let factors = nums.reduce((acc,x)=>{ let factsOfX = [];
  while(x !== 1){ 
    for (let i = 0; i<mayFactP.length; i++){
      if (x%mayFactP[i] == 0){ factsOfX.push(mayFactP[i]); x = x/mayFactP[i]; i--};};}; acc.push(factsOfX); return acc},[]);
  //Multiply the factors, every prime should be multiplied the biggest number of times is a factor of a singular number.
  let scm = mayFactP.reduce((res,x)=>{ let pow = factors.reduce((max,arr)=>{
  let count = 0;
  for(let i = 0; i<arr.length; i++){
  if (arr[i] == x){count ++;};};
  return Math.max(count,max);},0);
  return res*Math.pow(x,pow)},1)

  return scm;
  
};

smallestCommons([1,5]);