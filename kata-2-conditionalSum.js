const conditionalSum = function(values, condition) {
  //declare new array with numbers that fit condition
  let conditionalArr = []
  
  //if...else if condition for even and odd
  if (condition === 'even') {
    for (let value of values) {
      if (value % 2 === 0) {
        conditionalArr.push(value);
      }
    }
  } else if (condition === 'odd') {
    for (let value of values) {
      if (value % 2 !== 0) {
        conditionalArr.push(value);
      }
    }
  }

  //add valid numbers together
  let sum = conditionalArr.reduce(function(a,b) {
    return a + b;
  }, 0);
  //return sum
  return sum;
};

//testing  logs
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//Expected output
//6
//9
//144
//0