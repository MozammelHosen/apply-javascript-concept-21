//  factorial-reverse number

function factorial(number) {
    let result = 1;
  for (let i = number; i >= 1; i--) {
    // const element = i;
    result = result * i;
    // result *= i;
    // console.log(element);
  }
  return result;
}
const result = 5;
const output = factorial(result);
console.log(output);


// factorial

function factorial1(number){
    let result = 1;
    for(let i = 1; i<=number; i++){
        result = result * i;
    }
    return result;
}
const number = factorial1(7);
console.log(number);


//  function return reverse value 
function reverse(number){
    let result = 1;
    for(let i = number; i>= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number1 = factorial1(19);
console.log(number1);