"use strict";
/* Q 34
Pizzas: Share your favorite pizzas and express your love for them.*/
//Create an Array
let pizza = ["BBQ chicken Pizza", "Cheese Pizza", " Buffalo Pizza"];
//Using ForEach loop
pizza.forEach(name => {
    console.log(`I Like ${name}`);
});
// Printing Messge
console.log("I Really Love Pizza");
/*Q 35
T-Shirt: Create a function for customizing t-shirts.*/
function make_stirt(name, message) {
    console.log(`I wear ${name} Size shirt, Print on it, ${message}`);
}
//function call
make_stirt("Medium", "I like Coding");
/* Q 36
Large Shirts: Default values in make_shirt().*/
function make_shirt(size = "Large", message = "I love Java") {
    console.log(`I Wear ${size} Shirt with the message "${message}" print on it`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love TypeScript");
