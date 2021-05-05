const repeatNumbers = data => {
  const resultArr = [];

  data.forEach(arr => {
    let number = arr[0];
    let string = number.toString().repeat(arr[1]);
    resultArr.push(string);
  });

  const result = resultArr.join(', ');

  return result;
};

console.log(repeatNumbers([[1, 10]]));
// Expected Output: 1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
// Expected Output: 11, 222

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
// Expected Output 10101010, 343434343434, 9292
