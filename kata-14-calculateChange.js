const calculateChange = (total, cash) => {
  let change = cash - total;

  const changeAmount = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  if (change >= 2000) {
    let num = Math.floor(change / 2000);
    changeAmount.twentyDollar += num;
    change -= 2000 * num;
  }

  if (change >= 1000) {
    let num = Math.floor(change / 1000);
    changeAmount.tenDollar += num;
    change -= 1000 * num;
  }

  if (change >= 500) {
    let num = Math.floor(change / 500);
    changeAmount.fiveDollar += num;
    change -= 500 * num;
  }

  if (change >= 200) {
    let num = Math.floor(change / 200);
    changeAmount.twoDollar += num;
    change -= 200 * num;
  }

  if (change >= 100) {
    let num = Math.floor(change / 100);
    changeAmount.oneDollar += num;
    change -= 100 * num;
  }

  if (change >= 25) {
    let num = Math.floor(change / 25);
    changeAmount.quarter += num;
    change -= 25 * num;
  }

  if (change >= 10) {
    let num = Math.floor(change / 10);
    changeAmount.dime += num;
    change -= 10 * num;
  }

  if (change >= 5) {
    let num = Math.floor(change / 5);
    changeAmount.nickel += num;
    change -= 5 * num;
  }

  if (change >= 1) {
    let num = Math.floor(change / 1);
    changeAmount.penny += num;
    change -= 1 * num;
  }

  let result = {};

  for (let key in changeAmount) {
    if (changeAmount[key] !== 0) {
      result[key] = changeAmount[key];
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000)); // 213
// Output: { twoDollar: 1, dime: 1, penny: 3 }

console.log(calculateChange(2623, 4000)); // 1377
// Output: { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

console.log(calculateChange(501, 1000)); // 499
// Output: { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
