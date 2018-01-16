/**
 * any kind of application for a
 * client can be written in JavaScript
 * 
 * 
 */

const nums = [1, 2, 3, 4, 5];
//  const sum = reduce(nums, (memo, value) => {

//  }, 5);
//  console.log(sum);

const sum = nums.reduce((memo, value) => {
    return memo + value;
});

console.log(sum);