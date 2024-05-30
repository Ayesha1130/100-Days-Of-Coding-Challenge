/*  Day 21
Question 61: 
Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and
motorcycles using enums, and show one example.*/

// Making a list (enum) for different types of vehicles
enum vehicles {
    cars,
    trucks,
    motorcycles,

}
//  Showing one type of vehicle from the list
console.log(vehicles.cars);
console.log(vehicles.trucks);
console.log(vehicles.motorcycles);

/* Question 62: 
Making a Student Template: Create a blueprint for student information, including their
name, age, and the classes they're taking, and then fill in this blueprint with an 
example student.*/

// Making a blueprint interface for student information
interface StudentTemplate {
    name: string;
    age: number;
    classes: string[];

};
//  Filling in the blueprint with an example student
let student: StudentTemplate = {
    name: "Ayesha Iqbal",
    age: 25,
    classes: ["Inter","Bacholars","Masters"]
}
// Showing the student's information
console.log(student);

/* Question 63:
Shape Shifter: Write a program that can describe either a circle or a rectangle using
a special type alias, including properties unique to each shape.*/

//  Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;
    width?: number;
    height?: number;


}

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 10,
    
}

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    radius: 10,
    width: 10,
    height: 15
}

// Showing what we described
console.log(circle);
console.log(rectangle);






