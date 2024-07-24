let tax = 100;
// console.log(tax.toFixed(3));

let num = 123.89;
//  console.log(num.toPrecision(3));
//  console.log(num.toPrecision(4));

const hundreds = 1000000;
// console.log((hundreds.toLocaleString())); // USA format 1,000,000
// console.log((hundreds.toLocaleString('en-IN'))); // Indian format 10,00,000

/////////********** MATHS *******************/

// console.log(Math.abs(-6)); // MODE value = +ve sign value
// console.log(Math.round(5.4)); // round ups the number
// console.log(Math.round(5.7)); 
// console.log(Math.ceil(5.1)); // ceiling value, i.e. always takes the upper value
// console.log(Math.floor(5.9)); // flor value, always takes the lower value

// console.log(Math.min(2,3,4));
// console.log(Math.max(2,3,4));

console. log (Math.random()); // 0 < num < 1
console. log (Math.random()*10) + 1; // 0 < num 
console. log(Math.floor(Math.random()*10) + 1); //num + 1

// generating number within the range
min = 10;
max = 20; // generating the number b/w 10 & 20

console.log(Math.floor(Math.random() * (max - min + 1 /* 1 taken so that we don't get 0 as o/p */)) + min);
