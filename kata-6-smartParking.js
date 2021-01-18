const whereCanIPark = function (spots, vehicle) {
  //default response = false, if spot available: return array with coordinates of spot as [X,Y] pair
  let coordinate = false;
  //loop 1 for columns X, columns corresponds to spots's length
    for (let x = 0; x < spots.length; x++) {
      //loop 2 for rows Y (nested in loop 1), rows corresponds to spots[x]'s length
      for (let y = 0; y < spots[x].length; y++) {
        //spot dependant on vehicle type, can assign variable spot = spots[x][y]
        //regular cars park in R
        if (vehicle === 'regular') {
          if (spots[x][y] === 'R') {
            coordinate = [x, y]
          }
        //small cars park in R or S
        } else if (vehicle === 'small') {
          if (spots[x][y] === 'R' || spots[x][y] === 'S') {
            coordinate = [x, y]
          }
        //motorcycles can park in R, S or M
        } else if (vehicle === 'motorcycle') {
          if (spots[x][y] === 'R' || spots[x][y] === 'S' || spots[x][y] === 'M') {
            coordinate = [x, y]
          }
        }
      }
    }
    return coordinate;
};

//testing logs
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

/*
Expected Output:
[4, 0]
false
[3, 1]
*/