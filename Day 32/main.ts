/* Day 3
Question 94:
Use the .map() method to create a new array that contains the length of each word from an array of words.*/

// Defines an array with some words
let words:string[] = ["Typescript", "JavaScript", "React","Template"]

// Uses .map() to create a new array with the length of each word
let wordslenght = words.map(word => word.length)

console.log(wordslenght);

/* Question 95:
Write a function that uses the .filter() method to return an array of numbers greater than 10.

Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.*/

//  function filters an array, keeping only numbers greater than 10
function arrayOfNumbers(num:number) {
    return numbers.filter(num => num > 10)
    
}
// Example: Filtering an array of numbers
let numbers:number[] = [10,12,13,14,15,16,17]
console.log(arrayOfNumbers(10));


/* Question 96:
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.*/

// This function calculates the sum of all numbers in an array
function calculateNumbers(num1: number[]) {
    return num1.reduce((a,b) => a + b , 0)
    
}

// Example: Calculating the sum of all numbers in an array
let result = [20,30,40,50,60,70]

console.log(calculateNumbers(result));




