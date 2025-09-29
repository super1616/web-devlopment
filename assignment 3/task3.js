// 1) Create an array of numbers (>= 10 numbers)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 2) Normal function to find even numbers
function findEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0);
}

// Use the function
const evenNumbers = findEvenNumbers(numbers);
console.log("Even numbers:", evenNumbers);

// 3) Arrow function with map() to create a squared array (square the even numbers)
const squared = evenNumbers.map(n => n * n);
console.log("Squared numbers:", squared);

// 4) Arrow function with filter() to get numbers > 50 from the squared array
const filtered = squared.filter(n => n > 50);
console.log("Filtered ( > 50 ) numbers:", filtered);

// 5) Arrow function with reduce() to find the sum of numbers in the filtered array
const sum = filtered.reduce((acc, n) => acc + n, 0);
console.log("Sum of filtered numbers:", sum);
