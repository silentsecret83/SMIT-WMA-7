let price1 = prompt("Enter first number");
let price2 = prompt("Enter Second number");

if (price1 > price2) {
  console.log(`${price1} is greater then ${price2}`);
} else if (price1 < price2) {
  console.log(`${price2} is greater then ${price1}`);
} else {
  alert(`${price1} is equal to ${price2}`);
}
