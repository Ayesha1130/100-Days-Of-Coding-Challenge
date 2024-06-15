/* Day 36
Question 106:
Determine if a given year is a leap year using comparison operators.

Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.*/

// function checks if a year is a leap year
function isLeapYear(year:number):boolean {
    return(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));// output true

console.log(isLeapYear(2021));// output false

/* Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.*/

// function checks if a number is divisible by both 2 and 3
function checkDivisibility(num: number) {
    return num % 2 === 0 && num % 3 === 0;
    
}

console.log(checkDivisibility(12));// output true

console.log(checkDivisibility(15));// output false

/* Question 108:
Compare two strings to check if they are identical, ignoring case sensitivity.

Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.*/

// function checks if two strings are identical, ignoring case sensitivity
function compareString(username: string, password: string) {
    return username.toLowerCase() === password.toLowerCase();
    
}

console.log(compareString("ayesha", "Ayesha"));// output true

console.log(compareString("hello", "World"));// output false

