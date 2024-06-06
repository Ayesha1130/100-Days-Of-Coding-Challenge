/*  Day 27
Question 79:
Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.*/
//  object for a car with specific details
let car = {
    make: "Toyota",
    model: "Vigo",
    year: 2024
};
console.log(car.make); // LOG with dotnotation
console.log(car["model"]); //Log with brackets notation
/* Question 80:
Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.*/
//  object for a car with specific details
let myCar = {
    mycar: car,
    color: "Black",
};
// update the year property
car.year = 2021;
// update the car
console.log(myCar);
/* Question 81:
Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.*/
function logObjectProperties(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "black" });
export {};
