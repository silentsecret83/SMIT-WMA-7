// 01:- Write a js program to find the maximum between two numbers.

//let price1 = prompt("Enter first number");
//let price2 = prompt("Enter Second number");

//if (price1 > price2) {
//  console.log(`${price1} is greater then ${price2}`);
//} else if (price1 < price2) {
//  console.log(`${price2} is greater then ${price1}`);
//} else {
//  console.log(`${price1} is equal to ${price2}`);
//}

//02:-  Write a js program to find the maximum between three numbers.

// let price1 = prompt("Enter the first number");
// let price2 = prompt("Enter the second number");
// let price3 = prompt("Enter the third number");

//if (price1 > price2 && price1 > price3) {
//  console.log(`${price1} is greater than ${price2} and ${price3}`);
// } else if (price2 > price1 && price2 > price3) {
//  console.log(`${price2} is greater than ${price1} and ${price3}`);
// } else if (price3 > price1 && price3 > price2) {
//  console.log(`${price3} is greater than ${price1} and ${price2}`);
// } else {
//  console.log(`${price1}, ${price2}, and ${price3} are equal`);
// }

//03:- Write a js program to check whether a number is negative, positive or zero.

//let number = prompt("Enter the number");

//if (number > 0) {
// console.log(`${number} is the positive`);
//} else if (number < 0) {
//  console.log(`${number} is the negative`);
//} else if (number == 0) {
//  console.log(`${number} is equal to zero`);
//}

// 04:-   Write a js program to check whether a number is divisible by 5 and 11 or not.

//let number = prompt("Enter the number is divisible by 5 and 11 or not");

//if (number % 5 == 0 && number % 11 == 0) {
//  console.log(`${number} is divided by 5 and 11`);
//} else if (number % 5 == 0 && number % 11 !== 0) {
//  console.log(`${number} is divided by 5 only`);
//} else if (number % 5 !== 0 && number % 11 == 0) {
//  console.log(`${number} is divided by 11 only`);
//} else if (number % 11 !== 0 && number % 11 !== 0) {
//  console.log(`${number} is not divided by 5 and 11`);
//}

// 05:-    Write a js program to check whether a number is even or odd.

//let number = prompt("Enter the number");

//if (number == 0) {
//  console.log(`${number} is the zero`);
//} else if (number % 2 === 0) {
//  console.log(`${number}is even`);
//} else {
//  console.log(`${number}is odd`);
//}

//  06:-  Write a js program to check whether a year is leap year or not.

//let year = prompt("Enter the number to check that the year you have entered is a leap year or not");

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(`${year} is a leap year`);
//             alert(`${year} is a leap year`);
//         } else {
//             console.log(`${year} is not a leap year`);
//             alert(`${year} is not a leap year`);
//         }
//     } else {
//         console.log(`${year} is a leap year`);
//         alert(`${year} is a leap year`);
//     }
// }
// else {
//     console.log(`${year} is not a leap year`);
//     alert(`${year} is not a leap year`);
// }

//   07:-   Write a js program to input any alphabet and check whether it is vowel or consonant.

//let alphabet = prompt(
//  "Enter any alphabet to check if it's a vowel or consonant:"
//);

//if (
//  alphabet === "a" ||
//  alphabet === "A" ||
//  alphabet === "e" ||
//  alphabet === "E" ||
//  alphabet === "i" ||
//  alphabet === "I" ||
//  alphabet === "o" ||
//  alphabet === "O" ||
//  alphabet === "u" ||
//  alphabet === "U"
//) {
//  console.log(`${alphabet} is a vowel.`);
//  alert(`${alphabet} is a vowel.`);
//} else {
//  console.log(`${alphabet} is a consonant.`);
//  alert(`${alphabet} is a consonant.`);
//}

//08:-  Write a js program to check whether a character is uppercase or lowercase alphabet.

//let character = prompt(
//  "Enter any alphabet to check that the character is uppercase or lowercase alphabet "
//);

//if (character >= "A" && character <= "Z") {
//  console.log(`${character} is a capital letter`);
//  alert(`${character} is a capital letter`);
//} else if (character >= "a" && character <= "z") {
//  console.log(`${character} is a small letter`);
//  alert(`${character} is a small letter`);
//} else if (character >= 0 && character <= 9) {
//  console.log(`${character} is a number`);
//  alert(`${character} is a number`);
//} else {
//  console.log(`${character} is a symbol`);
//  alert(`${character} is a symbol`);
//}

//   09:-    Write a js program to input the week number and print weekday.

// var day = prompt("Enter the number from 1 to 7 to check the day name");

// switch (parseInt(day)) {
//     case 1:
//         {
//             console.log(`Monday`);
//             alert(`Monday`);
//         }
//         break;
//     case 2:
//         {
//             console.log(`Tuesday`);
//             alert("Tuesday");
//         }
//         break;
//     case 3:
//         {
//             console.log(`Wednesday`);
//             alert(`Wednesday`);
//         }
//         break;
//     case 4:
//         {
//             console.log(`Thursday`);
//             alert(`Thursday`);
//         }
//         break;
//     case 5:
//         {
//             console.log(`Friday`);
//             alert(`Friday`);
//         }
//         break;
//     case 6:
//         {
//             console.log(`Saturday`);
//             alert(`Saturday`);
//         }
//         break;
//     case 7:
//         {
//             console.log(`Sunday`);
//             alert(`Sunday`);
//         }
//         break;
//     default:
//         {
//             console.log(`Invalid number`);
//             alert(`Invalid number`);
//         }
// }

// 10:-  Write a js program to input the month number and print the number of days in that month.

//const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//const month = prompt("Enter the month number from 1 to 12");

//if (month >= 1 && month <= 12) {
//  const numberOfDays = daysInMonth[month - 1];
//  console.log(`Number of days in month ${month} is: ${numberOfDays}`);
//  alert(`Number of days in month ${month} is: ${numberOfDays}`);
//} else {
//  console.log("Invalid number. Please enter a number from 1 to 12.");
//  alert("Invalid number. Please enter a number from 1 to 12.");
//}

// 11:-   Write a js program to count a minimum number of notes in a given amount.

// 12: -    Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer.Calculate percentage and grade according to the following:
// Percentage >= 90 % : Grade A
// Percentage >= 80 % : Grade B
// Percentage >= 70 % : Grade C
// Percentage >= 60 % : Grade D
// Percentage >= 40 % : Grade E
// Percentage < 40 % : Grade F

// 13:-  Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basic_salary = parseFloat(
  prompt("Enter the basic salary of the employee:")
);
var HRA;
var DA;
var gross_salary;

if (basic_salary <= 10000) {
  HRA = 0.2 * basic_salary;
  DA = 0.8 * basic_salary;
} else if (basic_salary <= 20000) {
  HRA = 0.25 * basic_salary;
  DA = 0.9 * basic_salary;
} else {
  HRA = 0.3 * basic_salary;
  DA = 0.95 * basic_salary;
}
gross_salary = basic_salary + HRA + DA;
console.log(`Gross salary: ${gross_salary}`);
alert(`Gross salary: ${gross_salary}`);

//14:-    Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For the first 50 units Rs. 0.50/unit
//For the next 100 units Rs. 0.75/unit
//For the next 100 units Rs. 1.20/unit
//For units above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

//var units = prompt("Enter the Electricity units you have used");
//var bill;

//if (units <= 50) {
//  bill = units * 0.5;
//} else if (units <= 150) {
//  bill = 50 * 0.5 + (units - 50) * 0.75;
//} else if (units <= 250) {
//  bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
//} else {
//  bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
//}

//bill = bill + (bill * 20) / 100;
//console.log(`Total bill = ${bill}`);
//alert(`Total bill = ${bill}`);
