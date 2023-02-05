// isEvent Number Check

function isEvent(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return `This is Event Number ${number}`;
  } else {
    return `This is Not Event Number ${number}`;
  }
}
const myNumber = 55;
const myEvent = isEvent(myNumber);
console.log(myEvent);

//  odd Number Check
function oddNumberCheck(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return `This is Odd Number ${number}`;
  } else {
    return `This is Not Odd Number ${number}`;
  }
}
const myOddNumber = oddNumberCheck(3436);
console.log(myOddNumber);

//  Array Modhe Check Event Number

const isArray = [12, 14, 15, 16, 17, 18, 19, 20, 21, 22];
function isEvent(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const remainder = element % 2;
    if (remainder === 0) {
      console.log(`This is Event Number ${element}`);
    } else {
      return `This is Not Event Number ${element}`;
    }
  }
}
const myEventNumber = isEvent(isArray);
console.log(myEventNumber);

//  Let me Check This Array Of Odd Numbers

const isArrayNumber = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
function isOdd(number) {
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const odd = element % 2;
    if (odd !== 0) {
      console.log(`This is Odd Number ${element}`);
    } else {
      return `This is Not Odd Number ${element}`;
    }
  }
}
const myNumber2 = isOdd(isArrayNumber);
console.log(myNumber2);

//  Array number modthe Only return ture and false

const isArrayNumber3 = [56, 90, 71, 69, 57, 878, 866, 349];

function isTrue(number){
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element % 2 === 0){
            console.log(true);
        }else{
            return false;
        }
    }
}
const myNumber3 = isTrue(isArrayNumber3);
console.log(myNumber3)