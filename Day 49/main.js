/* Day 49
Question 145:
Create a function that accepts a callback and invokes it with some arguments.

Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.*/
function invokesCallbackFunction(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
invokesCallbackFunction(add, 10, 20);
/*
Question 146:
Show an example of a callback function used to filter an array of numbers.

Explain & TIP:
The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.*/
// This array of numbers will be filtered
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers);
/* Question 147:
Explain how to handle errors in a callback pattern.

Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.*/
function fetchData(callback) {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
        console.error(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
export {};
