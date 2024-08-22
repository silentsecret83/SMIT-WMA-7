const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0; // condition to check if the number is even
});

console.log(evenNumbers);
