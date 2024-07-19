// class 1

// // basic function
// // 1.
// function sum1(num1, num2) {
//     console.log("sum1 -> num1 + num2: ", num1 + num2)
// }
// sum1(3, 5)
// // 2
// let sum2 = function (num1, num2) {
//     let sum = num1 + num2
//     console.log("sum2 -> num1 + num2: ", sum)
// }
// sum2(3, 5)

// // Arrow function
// // 3
// let sum3 = (num1, num2) => console.log("sum3 -> num1 + num2: ", num1 + num2)

// sum3(3, 5)

// ternary operator
// if (2 > 5)
// console.log("5")
// else
// console.log("2")

// let ans = (2 > 5)? 5: (2 == 2)? 2 : 0
// console.log(ans)

// spread operator

// let smallArr = [10, 11, 12, 13];

// let arr = [1, 2, 4, 5, 19, 3, ...smallArr];

// console.log("arr : ", arr);
// console.log("spead operator ...arr : ", ...arr);

// class 2

// EcmaScript6 (ES6)
// 1. Arrow function
// 2. Ternary Operator
// 3. Spread Operator & Rest operator
// 4. Function default parameters
// 5. Destructuring (W.R.T Arrays & Objects)
// 6. Local Storage
// 7. var vs let vs const
// 8. Template literals

// 1. Arrow function - already done.
// 2. Ternary Operator - already done.
// 3. Spread Operator & Rest operator

// let arr1 = [1, 3, 5, 7]
// let arr2 = [9, 11]

// console.log([...arr1, ...arr2])

// // [1, 3, 5, 7, 100, 200, 9, 11]

// console.log([...arr1, 100, 200, ...arr2])

// Rest Operator

// function sum(n1, n2, n3, n4, n5, ...nums) {
//     console.log(nums)

// }

// sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

// // 4. Function default parameters

// function sum(n1, n2 = 5, n3 = 6, n4 = 7) {
//     return n1 + n2 + n3 + n4
// }

// console.log(sum(3))

// 5. Destructuring (W.R.T Arrays & Objects)

// let numbers = [2, 5, 6, 3, 4, 33, 6, 8]

// const [num1, num2, , num, , ...nums] = numbers

// console.log(num1, num2, num)

// let person = {
//     name: "Ali",
//     age: "22",
//     height: "5.9 f",
//     qualification: "BSCS"
// }

// let {name: firstName, qualification: qual, ...restProps} = person

// console.log(firstName, qual, restProps)

// // 8. Template literals

// let nam = "Ali"

// console.log("Hello Everyone, " + nam + " is a good person.") // Hello Everyone, Ali is a good person.
// console.log(`Hello Everyone, ${nam} is a good person.`)

// 7. Block Scoping (var vs let vs const)

// var - global scope
// let - block - {}
// const - constant

// var x = 7;

// function func() {
//     var x = 5
//     console.log(x)  // 5
// }
// func()
// console.log(x) //

// let x = 5;
// x = 10

// Class 3:

// let names = [1, 4, 5, 6, 8]

// let [name1,, name3, ...nums] = names

// console.log(name1, name3, nums, x)

// let person = {
//     name: "Ahmad",
//     age: "23",
//     qualification: "graduate"
// }

// let {name, qualification} = person

// console.log(name, qualification)

// import nums from "./main.js"

// let sumOfItself = (n1, n2) => n1 + n2

// console.log(sumOfItself(nums.num1, nums.num2))

// Class 4:
//  this is the 1st file::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const num1 = 50
// const num2 = 40

// export default { num1, num2 }

// this is 2nd file:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Asynchronous JS
// 1. Concurrency:
//                Doing multiple things at the same time.
// // 2. Callbacks:

// function displayGradeInfo(g) {
//     switch (g) {
//         case "A":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "B":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "C":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "D":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "F":
//             console.log(`Ahmad got the ${g} grade`)
//             break;
//         default:
//             console.log(`Incorrect Input`)
//             break;
//     }
// }

// function CalculateGrade(marks, callback) {

//     if (marks > 80) {
//         callback("A")
//     } else if (marks > 60) {
//         callback("B")
//     } else if (marks > 50) {
//         callback("C")
//     } else if (marks > 40) {
//         callback("D")
//     } else {
//         callback("F")
//     }

// }

// CalculateGrade(92, displayGradeInfo)

// set interval

// let count = 0
// let interval = setInterval(encourage, 5000);
// function encourage() {
//     console.log("You're doing great, keep going!");
//     console.log("count - ", count)
//     count++
//     if (count == 2) {
//         clearInterval(interval)
//     }
// }

// // set time out

// setTimeout(() => {
//     console.log("Hello Everyone!")
// }, 3000);

// Exercise 13.1

// function greet(name) {
//     console.log(`Hello, I'm ${name[0]} ${name[1]}}`)
// }

// function secondFunc(fullName, callback) {
//     let nameArr = fullName.split()
//     callback(nameArr)
// }

// secondFunc("Ahmad Sultan", greet)
