/* Day 20
Question 58:
Average Score Calculator: Write a simple program that can take lots of scores and
find their average.*/
// create function that calculates the average score
function scoreCalculator(...scores) {
    // calculate the average score by adding all the scores together and dividing by the
    // number of scores
    let result = scores.reduce((sum, score) => sum + score, 0);
    return result / scores.length;
}
// Show the scores
console.log(scoreCalculator(40, 60, 80, 70, 100));
/*  Question 59:
Add a Special Number: Make a program that creates custom adders. These adders can add
a specific number to any other number you give them later.*/
// Create a class that can add a special number to any number
class SpecialNumberAdder {
    specialNumber;
    // Initialize the class with a special number
    constructor(specialNumber) {
        this.specialNumber = specialNumber;
    }
    // Add the special number to the given number
    add(numberToAdd) {
        return numberToAdd + this.specialNumber;
    }
}
// Example usage:
const magicBox = new SpecialNumberAdder(5); // Creating a magic box that adds 5 to any number
console.log(magicBox.add(10)); // Output: 15 (10 + 5)
console.log(magicBox.add(20)); // Output: 25 (20 + 5)
/*   Question 60:
Self-Running User Profile: Create a quick, self-setup profile for a user that can
tell you the user's name and age.*/
// Create a user profile
let userProfile = (function () {
    // Define the user`s name and age
    let name = "Ayesha Iqbal";
    let age = 25;
    // Return an object with a function that prints the user`s name and age
    return {
        info: function () {
            console.log(`My Name is ${name} and I am ${age} years old`);
        }
    };
})();
// Print the user`s name and age
userProfile.info();
export {};
