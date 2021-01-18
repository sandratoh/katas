const instructorWithLongestName = function(instructors) {
  //parameter instructors is an array of object
  let numLetters = 0;
  let longestName = '';
  //loop array to find .name with highest value
  for (let instructor of instructors) {
    //highest value = most character --> USE .LENGTH
    if (instructor.name.length > numLetters) {
      numLetters = instructor.name.length;
      longestName = instructor;
    }
  }
  //return statement
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));