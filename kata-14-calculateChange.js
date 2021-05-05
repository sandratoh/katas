const calculateChange = (total, cash) => {
  let change = cash - total;

  const changeAmount = {
    twentyDollar: {
      value: 2000,
      amount: 0,
    },
    tenDollar: {
      value: 1000,
      amount: 0,
    },
    fiveDollar: {
      value: 500,
      amount: 0,
    },
    twoDollar: {
      value: 200,
      amount: 0,
    },
    oneDollar: {
      value: 100,
      amount: 0,
    },
    quarter: {
      value: 25,
      amount: 0,
    },
    dime: {
      value: 10,
      amount: 0,
    },
    nickel: {
      value: 5,
      amount: 0,
    },
    penny: {
      value: 1,
      amount: 0,
    },
  };

  const addToChangeAmount = denomination => {
    let changeValue = changeAmount[denomination].value;

    if (change >= changeValue) {
      const num = Math.floor(change / changeValue);
      changeAmount[denomination].amount += num;
      change -= changeValue * num;
    }
    return change;
  };

  addToChangeAmount('twentyDollar');
  addToChangeAmount('tenDollar');
  addToChangeAmount('fiveDollar');
  addToChangeAmount('twoDollar');
  addToChangeAmount('oneDollar');
  addToChangeAmount('quarter');
  addToChangeAmount('dime');
  addToChangeAmount('nickel');
  addToChangeAmount('penny');

  let result = {};

  for (let key in changeAmount) {
    if (changeAmount[key].amount !== 0) {
      result[key] = changeAmount[key].amount;
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
// Output: { twoDollar: 1, dime: 1, penny: 3 }

console.log(calculateChange(2623, 4000));
// Output: { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

console.log(calculateChange(501, 1000));
// Output: { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
