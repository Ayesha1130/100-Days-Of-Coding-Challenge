/* Day 40
Question 118:
Write a loop that logs numbers from 1 to 10 to the console.

Explain & TIP: A for loop is a concise way to run a block of code a specific number of times. It's perfect for when you know exactly how many iterations you need.*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/* Question 119:
Create a while loop that logs "Hello, World!" 5 times.

Explain & TIP: A while loop continues to run as long as its condition remains true. It’s ideal for when you want to repeat something until a certain condition changes.*/
//let name: string = "Hello, World!"
let count = 0;
while (count < 5) {
    console.log("Hello World");
    count++;
}
/* Question 120:
Use a for...of loop to iterate through an array of your favorite movies and log each one.

Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.*/
let movies = ["Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
for (let movie of movies) {
    console.log(movie);
}
export {};
