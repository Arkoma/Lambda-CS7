// // Javascript worksheet

// const x = 5;

// console.log(x);
// // 5
// // the 5 that outputs is stored in binary

// let name = 'Aaron';
// name += ' Burk';
// console.log(name);

// const foods = ['pizza', 'tofu', 'sushi'];
// foods.push('asparagus');
// //Why no error? Because we didn't change the reference.

// //ES5 -> ES6

// const foodsReferenceTwo = foods;
// foodsReferenceTwo.push('steak');

// console.log(foods);

// for (let i = 0; i < 10; i++);
// //i++ === i = i + 1
// console.log(i); // need to check the video

// let x = {};
// let y = x;

// /* = is assignment
// == is equality - instructor said never use ==
// == is strict equality (equality + type) */

// console.log(2 == '2');
// //returns true

// const arr = [];
// const arr2 = arr;
// console.log([1, 2, 3] === [1, 2, 3])
//returns false because it 

//let vs var

// if (true) {
//     var x = 'hi';
// }
// console.log(x);

// if (true) {
//     let x = 'hi';
// }
// console.log(x);
// // error x is not defined. That's bexause x is local scoped and console.log is looking for a global variable.

// function foo (){
//     const x = 'hi';
// }
// console.log(foo);
//just returns an empty function / a lambda function
// function foo (){
//     let x = 'hi';
// }
// foo();
// console.log(x)
// // x is not defined?

// function foo () {
//       const x = 5;
// }
// if (true) {
//     const x = 5;
// }
// //this works because const is locally scoped.
// I couldn't keep up so missed some examples

// use const. If you can't use const, use let. Never use var.

