/* Day 29
Question 85:
Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.*/
//  function finds where "code" first shows up in a text
function PositionOfSubstring(str) {
    let position = str.indexOf("code");
    return position;
}
// Example: Searching within a sentence
console.log(PositionOfSubstring("The quick brown fox jumps over the lazy dog"));
/* Question 86:
Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.*/
//  function checks if "JavaScript" is present in a given string
function textPresence(text) {
    // return true if the word "JavaScript" is present
    return text.includes("JavaScript");
}
// function checks if "JavaScript
console.log(textPresence("I Love JavaScript !"));
/*
Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.*/
function extractingSubstring(str) {
    let substring = str.substring(0, 10);
    return substring;
}
console.log(extractingSubstring("I Love Coding"));
export {};
