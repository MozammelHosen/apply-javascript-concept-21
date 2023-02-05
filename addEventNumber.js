//  add sum All  Number

function addEvent(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum += element;
    // console.log(element);
  }
  return sum;
}
const myNumber = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const result = addEvent(myNumber);
console.log(result);

//  add event number sum returns
function addEvent1(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 === 0) {
      sum += element;
      console.log(element);
    }
  }
  return sum;
}
const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const result1 = addEvent1(myNumbers);
console.log(result1);

//  add Odd numbers
function addOddNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 !== 0) {
      sum += element;
      console.log(element);
    }
  }
  return sum;
}
const oddNumber = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const result3 = addOddNumbers(oddNumber);
console.log(result3);

//  How to show an array all event number

function allEventNumber(number) {
  let eventNumber = [];
//   let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 === 0) {
      eventNumber.push(element);
      console.log(eventNumber);
    }
  }
  return eventNumber;
}
const allEventNumbers = [
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23.43, 65, 55, 44, 6, 77, 776,
  555, 6556,
];
const eventResult = allEventNumber(allEventNumbers);
console.log(eventResult);
