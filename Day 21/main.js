/*  Day 21
Question 61:
Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and
motorcycles using enums, and show one example.*/
// Making a list (enum) for different types of vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
//  Showing one type of vehicle from the list
console.log(vehicles.cars);
console.log(vehicles.trucks);
console.log(vehicles.motorcycles);
;
//  Filling in the blueprint with an example student
let student = {
    name: "Ayesha Iqbal",
    age: 25,
    classes: ["Inter", "Bacholars", "Masters"]
};
// Showing the student's information
console.log(student);
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 10,
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    radius: 10,
    width: 10,
    height: 15
};
// Showing what we described
console.log(circle);
console.log(rectangle);
export {};
