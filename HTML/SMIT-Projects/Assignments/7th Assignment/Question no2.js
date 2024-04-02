let price1 = prompt("Enter first number");
let price2 = prompt("Enter Second number");
let price3 = prompt("Enter Third number");

if (price1 > price2 and price2 > price3) {
  console.log(`${price1} is greater then ${price2 & price3}`);
} else if ((price1 < price2) & (price2 > price3)) {
  console.log(`${price2} is greater then ${price1 & price3}`);
} else if ((price1 < price2) & (price2 < price3)) {
  console.log(`${price3} is greater then ${price1 & price2}`);
} else {
  alert(`${price1} is equal to ${price2} and ${price3}`);
}
