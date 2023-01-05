'use strict';

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("test")); // true
console.log(isNaN(51)); // false

// NaN is the only thing in javascript that does not equal to itself
// therefor we can check if something truly is a NaN like this
function isn(x) {
    return x !== x;
} 

console.log(isn(NaN)); // true
console.log(isn("test")); // false
console.log(isn(51)); // false


