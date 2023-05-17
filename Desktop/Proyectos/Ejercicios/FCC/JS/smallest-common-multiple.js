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
  //Multiply the factors, every prime should multiply the result the biggest number of times is a factor of a singular number.
  let scm = mayFactP.reduce((res,x)=>{ let pow = factors.reduce((max,arr)=>{
  let count = 0;
  for(let i = 0; i<arr.length; i++){
  if (arr[i] == x){count ++;};};
  return Math.max(count,max);},0);
  return res*Math.pow(x,pow)},1)

  return scm;
  
};

smallestCommons([1,5]);