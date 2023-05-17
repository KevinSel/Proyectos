//Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    
    for (let i=0;i<arr.length;i++){
    if (Array.isArray(arr[i])){return steamrollArray(arr[i])}
    // arr.splice(i,1,[...arr[i]])
    };
};

steamrollArray([3]);
console.log(steamrollArray([3]))
test = [3,4,[5,3],2]
testo = test.splice(2,1,[...test[2]])

console.log(test)