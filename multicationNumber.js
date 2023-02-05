//  multicationNumber

function multicationNumber(number) {
    let sum = 1;
    for(let i = 0; i < number.length; i++) {
        const element = number[i];
        sum *= element;
        // console.log(element);
    }
    return sum;
}
const myNumber = [12,14,15,16,17,18,19,20,21,22,23]
const result = multicationNumber(myNumber)
// console.log(result)

//  Number multiplication
function multication(number){
    let sum = 1;
    for (let i = 1; i < number; i++){
        const element = i;
        sum *= element
        // console.log(element)
    }
    return sum;
}
const number = 3;
const multications = multication(4)
console.log(multications)


function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        // const element = number[i];
        result = result * i;
        // console.log(element)
    }
    return result;
}
// const number1 =23;
const number2 = factorial(9);
console.log(number2)