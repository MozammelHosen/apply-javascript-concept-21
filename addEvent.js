// add Event Number

const getArrayNumber = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let sum = 0;
function getrArray(number) {
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
    // console.log(element);
  }
  return sum;
}
const myArray = getrArray(getArrayNumber);
console.log(myArray);

function getrArray1(number) {
  let sum = 0;
  for (const element of number) {
    // console.log(element);
    sum += element;
    // console.log(sum);
  }
  return sum;
}
const result1 = getrArray1(getArrayNumber);
console.log(result1);

function getArrayNumber2(number) {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2) {
      // console.log(element);
      sum += element;
    } else {
      sum2 += element;
    }

    // console.log(element);
  }
  return sum,sum2;
}
const result2 = getArrayNumber2(getArrayNumber);
console.log(`Total Odd Number : ${result2}`);
// const result3 = getArrayNumber2(getArrayNumber);
// console.log(`Total Odd Number : ${result3}`);
