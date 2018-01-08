// functions
// function multiply (x, y) {
//     return (x*y);
// }
// const product = multiply(5, 5);
// console.log(product);

// // intrsuctors live program and make mistakes some time.

 // const, let
 // x and y are parameters
 // 5, and 5 are arguments

// function multiply (x, y) {
//    const z = x*y;
//    return z;
// }
// const product = multiply(5, 5);
// console.log(product);
// don't put ; after end of function and end of if statements.
// do put it at the end of an object and a function declaration.
// function declaration
// const multiply2 = function (x, y) {
//     const z = x*y;
//     return z;
//  };//for example
//  // in the second example you cannot call the function above it, so it's better.
// // function expression

// const multply3 = () => {
//      const z = x*y;
//    return z;
// };

// const multiply4 = (x, y) => x*y; // this one does the same thing as the one above
// //write expressions like above unless you have to reference 'this'
// const squareNum = x => x*x;
// const product = multiply3(5, 5);
// // multiply 3 is not defined.
// console.log(product);

// below is from Ben in slack
// functions

// function multiply(x, y) { // function declaration
//     const z = x * y;
//     return z;
//   }
  
//   const multiply2 = function(x, y) { // function expression
//     const z = x * y;
//     return z;
//   };
  
//   const multiply3 = (x, y) => {
//     const z = x * y;
//     return z;
//   };
  
//   const multiply4 = (x, y) => x * y;
  
//   const squareNum = x => x * x;
  
//   const product = multiply(5, 5); // 25
//   console.log(product);
  
//   const product2 = multiply2(5, 5); // 25
//   console.log(product2);
  
//   const product3 = multiply3(5, 5); // 25
//   console.log(product3);

// callback functions
// const foo = () => {};

// const functions = [
//     () => {},
//     () => {},
//     () => {},
// ]; // functions can be aside arrays

// functions [0]();

// const user = {
//     name: 'Ben',
//     sayHi: (message) => {
//       console.log(message);
//     },
//   };
  
//   user.sayHi('hello!');


// const foo = () => {
//   console.log('hello world!');
// };

// const bar = (cb) => {
//   cb();
// };

// bar(foo);

//a 'callback' is any function that is passed into another function?

// const bar = (cb) => {
//     cb('hello world!');
//   };
  
//   bar((message) => {
//     console.log(message);
//   });

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//The use of let for the loop also solved the problem of having to use closure with var in certain cases

// numbers.forEach((num) => {
//     console.log(num);
// });
//preferred method for iterating over an array.

// bellow from Ben

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i]);
// }

// numbers.forEach((num) => {
//   console.log(num);
// });

// map method
// difference between forEach and map is that map creates another array. forEach just creates output without putting it into a new array.

// reduce method

// const sum = numbers.reduce((runningTotal, value) => {
//     console.log('memo: ', runningTotal);
//     console.log('value: ', value);
//     return runningTotal + value;
// });

// console.log(sum);

// filter like map but you can exclued items in the array

/**
 * Jonathan Brunt [1:03 PM] 
@Russell Stinson I'm pretty sure the find() method 
will return the first value that meets the test, or 
undefined if nothing meets the test
 */

/**steps for getting assignment
 * don't clone
 * fork first
 * then clone
 * 
*/


 
