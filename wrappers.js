let x = "This a primitive string";

// use strict prevents this from working
x.randomProperty = 50;
new String(x).randomProperty = 50; // Line 4 is same as this line. Note the implicit coercion/wrapping.

const p = "hello";
const a = p.toLowerCase();

console.log(p + " -- " + a);
console.log(p === a);

// causes error
console.log(randomProperty);
