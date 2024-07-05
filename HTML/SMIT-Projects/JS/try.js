// CH 1 Alert
// alert("Hi Everyone");

// Ch 2 Variables for Strings

// var name = "usama";
// alert(name);

// name = "Usama";
// alert(name);
// var lastName = "Smith";
// var cityOfOrigin = "New Orleans";
// var aussieGreeting = "g'Day";
// var nickname = "Bub";
// var thanx = "Thanks for your input!";
// alert(thanx);

// Ch 3 Variables for Numbers

// var num = 23;
// newnum = num + 7;
// console.log(newnum);
// alert(newnum);

// var num1 = 45;
// var num2 = 35;
// total = num1 + num2;
// alert(total);
// console.log(total);

// var num = 80;
// num = num + 10;
// console.log(num);
// alert(num);
// total = num + 30;
// console.log(total);
// alert(total);

//  var 1stPresident = "Washington"; (we does not use the num in the start of the var)
// var prezWhoCame1st = "Washington";
// alert(144);

// CH 4 Variable Names Legal and Illegal
// camelCase
// example:
// userResponse
// userResponseTime
// userResponseTimeLimit

//  Ch 5 : Math expressions: Familiar operators

// var num1 = 4 + 5;
// var num2 = 5 - 2;
// var num3 = 6 * 3;
// var num4 = 8 / 4;
// var num5 = 100 % 60;
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);

// CH 6: Math expressions: Unfamiliar operators

// var num = 1;
// var newNum = num++;
// alert(newNum);
// console.log(newNum);

// var num = 1;
// var newNum = ++num;
// alert(newNum);
// console.log(newNum);

// var num = 1;
// var newNum = num--;
// alert(newNum);
// console.log(newNum);

// var num = 1;
// var newNum = --num;
// alert(newNum);
// console.log(newNum);

// Ch :7 Math expressions: Eliminating ambiguit

// var total = 1 + 4 - (9 * 21) / 5;
// alert(total);
// console.log(total);

// var total = 1 + 3 * 7;
// alert(total);
// console.log(total);

// resultOfComputation = 2 * 4 * (3 + 6);
// alert(resultOfComputation);
// console.log(resultOfComputation);

// resultOfComputation = 2 * 4 * 4 + 2;
// alert(resultOfComputation);
// console.log(resultOfComputation);

// Ch 8: Concatenating text strings

// var username = "Ahmad";
// var message = "Thanks";
// var banger = "!";
// var customMess = username + message + banger;
// alert(message);
// alert("Thanks" + username + "!");
// alert(message + username + banger);
// alert(customMess);
// alert("2" + "2");
// alert("2 plus 2 equals " + 2 + 2);

// cH 9 : Prompts:

// var name = prompt("Enter your name:");
// alert(name);

// var question = "your name?";
// var defaultAnswer = "Usama";
// var name = prompt(question, defaultAnswer);

// var numOfCats = prompt("How many Cats?");
// var toManyCats = numOfCats + 1;
// alert(toManyCats);

// var numOfCats = prompt("How many Cats?");
// var toManyCats = +numOfCats + 1;
// alert(toManyCats);

// Ch 10: if statements:

// var x = prompt("Who is known as the mother of the nation of Pakistan?");
// if (x === "Fatima jinnah") {
//   alert("correct!");
// }

// var correctAnswer = "Fatima jinnah";
// if (x === correctAnswer) {
//   score++;
//   userIQ = "genius";
//   alert("Correct!");
// }

// Ch 11: Comparison operators:

// var x = prompt("ticket");
// if (yourTicketNumber !== 487208) {
//   alert("Better luck next time.");
// }

// Ch 12: if...else and else if statements:

// var x = prompt("Nationality?");
// if (x === "Pakistani") {
//   alert("Correct");
//   console.log("Correct");
// } else {
//   alert("False");
// }

// var correctAnswer = "Pakistani";
// if (x === correctAnswer) {
//   alert("Correct");
// } else {
//   score--;
//   userIQ = "problematic";
//   alert("Incorrect");
// }

// var correctAnswer = "Pakistani";
// if (x === correctAnswer) {
//   alert("Correct!");
// } else if (x === "Rome") {
//   alert("Incorrect but close");
// } else {
//   alert("Incorrect");
// }

// ch 13 Testing sets of conditions

// var weight = prompt("enter value");
// var time = prompt("enter value");
// var age = prompt("write the age");
// if (weight > 300 && time < 6 && age < 25 && gender === male) {
//   alert("You can Apply");
// } else {
//   alert("Try again");
// }

// var cgpa = prompt("enter value");
// var number = prompt("enter value");

// if (cgpa > 2.5 || number > 720) {
//   alert("You can Apply");
// } else {
//   alert("Try again");
// }

var cgpa = prompt("cgpa");
var num = prompt("Number");
var age = prompt("age");
var weight = prompt("weight");

if (cgpa > 2.5 || (num > 660 && age < 25 && weight < 100)) {
  alert("You can Apply");
} else {
  alert("Try again");
}
