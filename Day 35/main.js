/* Day 35
Question 103:
Write a function that returns a random boolean value, true or false.
Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.*/
function randomBoolean() {
    return Math.random() > 0.5;
}
console.log(randomBoolean());
/* Question 104:
Create a function that generates a random hexadecimal color code.

Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.*/
function generateRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}
console.log(generateRandomColor());
/* Question 105:
Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.*/
function randomInteger() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(randomInteger());
export {};
