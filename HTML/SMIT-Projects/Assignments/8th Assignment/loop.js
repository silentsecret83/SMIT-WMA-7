// 1. Write a JS code to print numbers from 1 to 10

//for (let index = 1; index <= 10; index++) {
// console.log(index);
//}

// 2. Write a JS code to print Even numbers in given array

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Even numbers in the array:");
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             console.log(array[i]);
//         }
//     }

// 3.  Write a JS code to delete all occurrence of element in given array

// const array = [6, 2, 3, 4, 2, 6, 7, 2, 9, 10, 2];
// const val = 2;

// function removeAllOccurrences(arr, value) {
//     return arr.filter(item => item !== value);
// }

// const newArray = removeAllOccurrences(array, val);
// console.log("Array after removing all occurrences of", val + ":", newArray);

// 4. Write a JS code to find the power of a number using for loop

//// Function to calculate power of a number using for loop
// function power(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }
// const base = parseFloat(prompt("Enter the base:"));
// const exponent = parseInt(prompt("Enter the exponent:"));

// if (isNaN(base) || isNaN(exponent)) {
//     console.log("Please enter valid numbers.");
//     alert("Please enter valid numbers.");
// } else {
//     const result = power(base, exponent);
//     console.log(base + " raised to the power of " + exponent + " is:", result);
//     alert(base + " raised to the power of " + exponent + " is:" + result);
// }

// 5. Write a JS code to print a pattern using for loop
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 
*/

// for (let i = 1; i <= 8; i++) {
//     var p = ' '
//     for (let j = 1; j <= i; j++){
//         p += j + ' ';
//     }
//     console.log(p);
// }

// Q.6 Write a JS code to find the no of digits in a number

// let number = 5680

// let numCount = 0

// while (number >= 1) {
//     number = number / 10
//     numCount++;
// }

// console.log("count -> ", numCount);

// Q.7 Write a JS code to calculate the sum of digits in a number

// let num = 6890

// let sum = 0
// let remainder=0;
// while(num>=1){
//     remainder=Math.floor(num%10)
//     sum=Math.floor(sum + remainder)
//     num=Math.floor(num/10)
// }
// console.log(sum);

// 8. Write a JS code to find the largest number in an array
// let num =[200, 400, 500, 789, 892, 926]
// let max = -Infinity

// for (let i = 0;  i< num.length; i++) {
//     if (max < num[i]) {
//         max = num[i]
//     }
// }

// console.log(max);

// Q.9  Write a JS code to print the Fibonacci series for a given value of N

// let firstValue = 0
// let secondValue = 1
// let n = parseInt(prompt("Enter the required value for series"))

// for (let index = 2; index < n; index++) {
//     let temp = firstValue
//      firstValue = secondValue
//     secondValue = secondValue + temp

//     console.log(secondValue);
// }

// Q.10 . Write a JS code to find duplicate values in a given array

// let num = [10, 20, 40, 50, 60, 20, 60, 90];
// for(let i =0; i<num.length; i++){
//     for(let j=i+1; j<num.length; j++){
//       if(num[i] == num[j]){
//         console.log("Duplicate number is :", num[i]);
//       }
//     }
// }

// Q.11 Write a JS code for Linear search algorithm

// let num = [12,14,16,11,19,90, 80, 70 , 40];

// let searchingNum = 40;

// for (let i=0; i<num.length; i++){
//     if(searchingNum == num[i]){
//         console.log("Number at index :", i);
//     }
// }

// Q.12 Write a JS code for Binary search algorithm
// let nums = [1, 5, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
// let num = 64;

// let start = 0;
// let end = nums.length - 1;

// let ansLocation = -1;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (nums[mid] == num) {
//     ansLocation = mid;
//     break;
//   }

//   if (nums[mid] < num) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

// console.log("At Index", ansLocation);
