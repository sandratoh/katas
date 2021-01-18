/*
//find biggest number and then second number -- doesn't work
const sumLargestNumbers = function(data) {
  let largestNum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      largestNum = data[i];
      //delete largest  number from array for new loop, deletes wrong number?
      delete data[i];
    }
  }
  //find second largest number in array
  let secondLargestNum = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] > secondLargestNum && data[j] <= largestNum) {
      secondLargestNum = data[j]
    }
  }
  let sum = largestNum + secondLargestNum;
  return sum;
}
*/

const sumLargestNumbers = (data) => {
  const arr = data.sort((a,b) => b - a);
  return arr[0] + arr[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));