// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...arr) {
  let list = [].concat(...arr), ans=[];
   list
  .sort((prev,post)=>list.indexOf(prev)-list.indexOf(post))
  .reduce((acc,num)=> {if (acc !== num){ans.push(num)};return num},0);
  return ans;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);