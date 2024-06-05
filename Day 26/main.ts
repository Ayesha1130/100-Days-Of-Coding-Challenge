/* Day 26
Question 76:
Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.*/

//function adds two numbers and returns the result
function together(num1: number, num2: number) {
  return num1 + num2;
}
console.log(together(5, 5));

/* Question 77:
Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.*/

//  function greets a user by name, or greets an anonymous user if no name is provided
function greet(name: string = "anonymous") {
  console.log(`Hello ${name}`);
}
greet("zaviyar"); // Outputs: Hello, zaviyar!

greet(); // Outputs: Hello, anonymous!

/* 
Question 78: 
Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.*/

// Function declaration for squaring a number
function expressionSquaring(number: number) {
  return number * number;
}
// Function expression for squaring a number
const squaringDeclarations = function (number: number): number {
  return number * number;
};
// Using both functions to square the number 8
console.log(expressionSquaring(8));
console.log(squaringDeclarations(8));
