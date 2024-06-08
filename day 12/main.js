// function add(x, y) {
//   return x + y;
// }

// console.log(add(4, 5, 7, 8, 9));

// function add(...args) {
//   let sum = 0;
//   for (i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }

// let result = add(1, 2, 6, 78, 13); // [1,2]

// console.log(result);

// function multiply() {
//   let multi = 1;

//   for (i = 0; i < arguments.length; i++) {
//     multi *= arguments[i];
//   }

//   return multi;
// }

// let result = multiply(2, 6, 734, 8, 4);

// console.log(result);

// let greet = function (name) {
//   console.log(`Hello ${name} `);
// };

// greet("Ali");

// let greet = (name) => {
//   console.log(`Hello ${name} `);
// };

// greet("Ali");

// (function () {
//   console.log(`Hello world!`);
// })();

// let numbers = [3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// let result = numbers.map((x) => {
//   return x;
// });

// console.log(result);

// function greeting(callback) {
//   console.log("hello ");
//   callback("ali");
// }

// greeting(name);

// function name(n) {
//   console.log(n);
// }

//  n --- > n!   n *n-1

// n == 0,1 ---> 1

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
