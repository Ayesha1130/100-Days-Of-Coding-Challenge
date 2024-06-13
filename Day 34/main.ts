/* Day 34
Question 100: Use the JavaScript Math object to find the square root of 144.

Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need.*/

// create a square root function
function sqrt(number: number) {
  return Math.sqrt(number);
}
console.log(sqrt(144)); // output 12

/* Question 101:
Generate a random integer between 1 and 10.

Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.*/

// create a random integer function
function randomInt(): number {
  return Math.floor(Math.random() * 10) + 1;
}
// generate a random integer function
console.log(randomInt());

/* 
Question 102: 
Calculate and log the absolute difference between the number -5 and 5.

Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.*/

// create a absolute difference function

function absoluteDifference(num1: number, num2: number) {
  return Math.abs(num1 - num2);
}

console.log(absoluteDifference(-5, 5)); // output 10
