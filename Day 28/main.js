/* Day 28
Question 82:
Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.*/
function findLen(name) {
    return name.length;
}
console.log(findLen("Hello World"));
/* Question 83:
Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/
function ConvertingCase(str) {
    let uppercase = str.toUpperCase();
    let lowercase = str.toLowerCase();
    console.log("UpperCase:", uppercase, "LowerCase:", lowercase);
}
ConvertingCase("Hello World");
/* Question 84:
Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".*/
function replacesText(str) {
    return str.replace(/JavaScript/g, "TypeScript");
}
console.log(replacesText("I love JavaScript"));
export {};
