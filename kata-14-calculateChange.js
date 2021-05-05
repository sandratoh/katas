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

  const addToChangeAmount = changeUnit => {
    const unitConversion = {
      2000: 'twentyDollar',
      1000: 'tenDollar',
      500: 'fiveDollar',
      200: 'twoDollar',
      100: 'oneDollar',
      25: 'quarter',
      10: 'dime',
      5: 'nickel',
      1: 'penny',
    };

    if (change >= changeUnit) {
      const num = Math.floor(change / changeUnit);
      changeAmount[unitConversion[changeUnit]] += num;
      change -= changeUnit * num;
    }
    return change;
  };

  addToChangeAmount(2000);
  addToChangeAmount(1000);
  addToChangeAmount(500);
  addToChangeAmount(200);
  addToChangeAmount(100);
  addToChangeAmount(25);
  addToChangeAmount(10);
  addToChangeAmount(5);
  addToChangeAmount(1);

  let result = {};

  for (let key in changeAmount) {
    if (changeAmount[key] !== 0) {
      result[key] = changeAmount[key];
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
