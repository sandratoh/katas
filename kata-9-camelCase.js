const camelCase = input => {
  const stringArr = input.split(' ');

  let result = '';

  stringArr.map(string => {
    string !== stringArr[0]
      ? (result += `${string[0].toUpperCase()}${string.slice(1)}`)
      : (result += string);
  });

  return result;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
