"use strict";
/* Day 23
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. */
Object.defineProperty(exports, "__esModule", { value: true });
//  This function adds a number and a string that represents a number
function arithmetic(number, string) {
    // Convert the number to a string and return the result
    return number + Number(string);
}
console.log(arithmetic(5, "5"));
/* Question 68:
Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.*/
//  This function multiplies two decimal numbers
function decimalNumber(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(decimalNumber(0.2, 0.3));
/* Question 69:
Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.*/
// This function divides two numbers and finds the quotient and remainder
function dividingAndRemainder(divides, adviser) {
    let quotient = Math.floor(divides / adviser);
    let remainder = divides % adviser;
    return { quotient, remainder };
}
console.log(dividingAndRemainder(20, 3));
