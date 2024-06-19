/* Day 47
Question 139: 
List three reserved words in JavaScript and create a valid use case for each.

Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.*/

let count = 10;

if(count > 0) {
    console.log("Count is greater than 0");
}

function sum(a: number, b: number) {
    return a + b
    
}

console.log(sum(10, 20));

/* Question 140: 
Explain the error that occurs when trying to use a reserved word as a variable name.

Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript. This is because reserved words have predefined meanings and uses in the language syntax.*/

//let let = 10;   This line would cause a syntax error

console.log(
    "Using a reserved word as a variable name causes a syntax error in JavaScript."
  );
  // It's important to avoid using reserved words as identifiers to prevent these errors.


/* 
Question 141: 
Discuss the significance of the await reserved word in asynchronous JavaScript.

Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.*/

// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {

    const data = await fetch('https://api.example.com/data');;
    console.log(data);
    
   
}
console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );
