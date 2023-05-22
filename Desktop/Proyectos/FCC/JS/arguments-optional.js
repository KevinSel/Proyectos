// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether(a,b) {
  if (arguments.length == 1 && typeof a == "number"){
    return function add(b){if (typeof b == "number"){return a+b;
                          };
           };
  };
  if (typeof a == "number" && typeof b == "number"){
    return a+b;
  };
};
