
const urlEncode = text => {
  //variable to store new encoded string
  let encodedString = '';
  //remove whitespace from start and end
  let string = text.trim();
  //loop to find space
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      //replace 'space' with '%20' when passing through to new encoded string
      encodedString += '%20';
    } else {
      encodedString += string[i];
    }
  } return encodedString;
}



/* Using array methods and concise body arrow functions

CODE BELOW:
const urlEncode = text => encodedString = text.trim().split(' ').join('%20');

EXPLANATION:
1. removes whitespace
2. removes space and split string into array
3. combines array back together with separator '%20'
*/

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Expected Outcome:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/