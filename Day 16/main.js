/* Day 16           Question 46
Enhanced Laptop Object: Construct an object for a laptop including properties make,
model, year, and a method describe() that logs a sentence about the laptop. */
let Laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2019,
    discribed: function () {
        console.log(`This Laptop is a  ${this.make}  ${this.model} from ${this.year}`);
    },
};
Laptop.discribed();
/* Question 47
Advanced Array Destructuring: Given an array of objects representing different laptops,
each with properties make, model, and year, use array destructuring to assign the first
and second laptops to variables. Then, log these variables.*/
//array of objects representing different laptops
let laptops = [
    {
        make: "Apple",
        model: "MacBook Pro",
        year: 2019,
    },
    {
        make: "Dell",
        model: "XPS 13",
        year: 2021,
    },
    {
        make: "HP",
        model: "Spectre x360",
        year: 2021,
    },
];
// Using array destructuring to assign the first and second laptops to variables
let [fristLaptop, secondLaptop] = laptops;
// Logging these variable
console.log(fristLaptop);
console.log(secondLaptop);
/* Question 48
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different
sets of laptops. Use the spread operator to combine these arrays into a single array
sorted in ascending order, then log the result.*/
let laptopPriceSet1 = [21000, 34000, 76000];
let laptopPriceSet2 = [12000, 49000, 51000];
let allLaptopPrice = [...laptopPriceSet1, ...laptopPriceSet2].sort((a, b) => a - b);
console.log(allLaptopPrice);
export {};
