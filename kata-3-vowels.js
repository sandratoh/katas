const numberOfVowels = data => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  //nested loop to check character
  for (let character of data) {
    for (let vowel of vowels) {
      if (character === vowel) {
        counter ++
      }
    }
  }
  //return statement
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));