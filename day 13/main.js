function factorial(n) {
  if (n < 1) {
    return 1;
  } else {
    // n *n -1

    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// "use strict";

// var x = 5;
// let y = 9;

// function sum() {
//   if (true) {
//     x = 8;
//     console.log("good morning");
//   }
//   console.log(x);
// }

// sum();

// console.log(x);

// let x = 9;
// x = 12;

// const a = 3;
// a = 6;

// var x = 10;
// console.log(x);

// var x ;
// x = 10
// console.log(x);

// function full hoisting

// sum(5, 8);

// function sum() {

//     'use strict';
//   x = 90;

//   console.log(x + y);
// }

// sum();
// console.log(x);
