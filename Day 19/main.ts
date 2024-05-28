/* Day 19        
Question 55:
Double Numbers in an Array: Make a list of numbers. Then, use a 
trick to make a new list where each number is twice its original value.*/

// A list of numbers
let numbers = [1,2,3,4,5,6,7,8,9];

// A new list with each number doubled
let doubleNumber = numbers.map(number => number * 2);

//Shows the new list with each number doubled
console.log(doubleNumber);

/* Question 56
Keep Only Strings: Given a mix of different types of items, make a new list 
that has only the words.*/

// A mixed bag of items
let mix = [ 1,"Apple", 2,"Banana", 3,"carrot",true,"Orange"];

// A new list with only the strings
let onlyStrings = mix.filter(item => typeof item === "string");

//Shows the list of just words
console.log(onlyStrings);

/* Question 57
Find the Average Grade: Given a list of grades, calculate the average grade.*/

// A List of grades
let grades = [50,60,70,80,90,99];

// Calculates the average grade 
let average = grades.reduce((total, grades) => total + grades,0) / grades.length;

// Shows the average grade
console.log("Average Grade:",average);




