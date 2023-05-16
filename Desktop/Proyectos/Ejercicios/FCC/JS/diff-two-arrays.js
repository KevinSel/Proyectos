// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. (One dimensional arrays)


function diffArray(arr1, arr2) {
  return arr1.concat(arr2)
  .sort()
  .filter((x,i,arr)=> x != arr[i+1] && x != arr[i-1]);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);