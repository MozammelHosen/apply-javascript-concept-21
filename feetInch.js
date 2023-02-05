//  Inch To Feet Convert
const myInches = 72;
const feets = myInches / 12;
console.log(feets);

function myInche(inch) {
  const feet = inch / 12;
  return feet;
}
const result = myInche(122);
console.log(result.toFixed(2));


// কিলোমিটারকে মিটার এ কনভার্ট কারো

function mileToKilometer(meter){
  const kilometer = meter * 1.609;
  return kilometer;
}

const meter = 123;
const result2 = mileToKilometer(meter);
console.log(result2.toFixed(2));
