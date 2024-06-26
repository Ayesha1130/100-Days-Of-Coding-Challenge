/* Day 14
Question 43: Unchanged Magicians: Preserve the original magician names while creating
a new "great" list.*/
//Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function make magicians great though .map() it will  modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_name = ["Ali", "Hussain", "Zaviyar", "Orhan"];
let copy_magicians_name = magicians_name.slice();
let copy_great_magicians = make_great(copy_magicians_name);
//show both array orginal and copy
//Orignal
console.log("\n***Orginal Array***");
show_magicians(magicians_name);
//Copied
console.log("\n***Copied Array***");
show_magicians(copy_great_magicians);
/* Question 44.
Sandwiches: Summarize sandwich orders with varying ingredients.*/
//let sandwich:string[] = ["Chicken Pizza","Cheese Pizza","Spicy Pizza"]
function mySindwich(...ingredients) {
    console.log(`Make Sandwich with ${ingredients.join()}`);
}
mySindwich("\nChicken", "Cheese", "Chilli");
mySindwich("\nCheese", "Spicy Chicken");
mySindwich("\nGreenChilli", "Mayo", "Ketchup");
function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    // Iterate over additional arguments and add them to the car object
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage:
const car = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(car);
export {};
