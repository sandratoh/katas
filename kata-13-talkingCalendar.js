const talkingCalendar = date => {
  const dateParsed = new Date(date);

  const month = dateParsed.toLocaleString('default', { month: 'long' });
  const day = dateParsed.getDate();
  const year = dateParsed.getFullYear();

  let unit;
  switch (day) {
    case 1:
    case 21:
    case 31:
      unit = 'st';
      break;
    case 2:
    case 22:
      unit = 'nd';
      break;
    case 3:
    case 23:
      unit = 'rd';
      break;
    default:
      unit = 'th';
  }

  return `${month} ${day}${unit}, ${year}`;
};

console.log(talkingCalendar('2017/12/02')); // Output: December 2nd, 2017
console.log(talkingCalendar('2007/11/11')); // Output: November 11th, 2007
console.log(talkingCalendar('1987/08/24')); // Output: August 24th, 1987
