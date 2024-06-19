/* Day 46
Question 136:
Use console.log() to debug and track the value of a variable inside a loop.

Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.*/
for (let i = 0; i <= 10; i++) {
    console.log(`iteration ${i}`);
}
/* Question 137:
Implement a try-catch block to handle potential errors in a block of code.

Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.*/
//Demonstrates using a try-catch block to handle errors
try {
    //Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    //console.log(error.message)// Logs the error message
} // This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
/* Question 138:
Describe how to use breakpoints in browser developer tools to debug JavaScript code.*/
// Example JavaScript code with breakpoints
function calculateSum(a, b) {
    let result = a + b; // Breakpoint set here
    return result;
}
function main() {
    let x = 5;
    let y = 3;
    console.log("Starting calculation...");
    // Call the calculateSum function
    let sum = calculateSum(x, y); // Breakpoint set here
    console.log("Sum:", sum);
    console.log("Calculation complete!");
}
// Call the main function
main();
export {};
