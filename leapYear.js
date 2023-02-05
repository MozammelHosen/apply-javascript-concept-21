//  How to leapYear decliare

function leapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return(`This is a leap year :${year}`);
  } else {
    return(`This is not a leap year: ${year}`);
  }
}
const myYear = 2012;
const result = leapYear(myYear);
console.log(result);


//  how to leapYear returns true and false


function leapyears(year) {
  const remainder = year % 4;

  if(remainder === 0){
    return true;
  }
  return false;
}

const myYears = 2020;
const result2 = leapyears(myYears);
console.log("This is Leap Year : ",result2);
const hereYears = 2027;
const result3 = leapyears(hereYears);
console.log("Not Leap Year Year :",result3);