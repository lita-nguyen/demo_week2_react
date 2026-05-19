const x = 10;
let y = "";

//ternary
x > 5
  ? console.log(`greater than ${x} > 5`)
  : console.log(`less than ${x} < 5`);

//
y = x > 5 ? `greater than ${x} > 5` : `less than ${x} < 5`;
console.log(y);
