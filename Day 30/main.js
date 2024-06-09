/*  Day 30
Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.*/
// This function rounds a decimal number to the nearest whole number
function roundingNumber(num) {
    let result = Math.round(num);
    return result; //Rounds the number
}
console.log(roundingNumber(1.6)); // Prints the number
console.log(roundingNumber(1.4));
/* Question 89:
Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.*/
// This function converts a string to a number
function stringToNumber(str) {
    //Converts the string to a number
    return parseFloat(str);
}
// Example: Turning a numeric string into a real number
console.log(stringToNumber("123.45"));
console.log(stringToNumber("100"));
/*Question 90:
Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.*/
// This function checks if a value is NaN
function valueNan(val) {
    return isNaN(val);
}
console.log(valueNan(100));
console.log(valueNan("TypeScript"));
export {};
