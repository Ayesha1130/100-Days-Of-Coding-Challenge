/* Day 17
Question 49
Function with Rest Parameters: Write a function that takes a rest parameter representing
multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/

function hobbies(...hobby: string[]) {
  hobby.forEach((element) => {
    console.log(`I Enjoy ${element}`);
  });
}
hobbies("Horse riding", "Playing ", "Coding", "Reading ");

/*Question 50
Multiline Template Literals: Use template literals to create a multiline string that 
describes your ideal day. Include at least three different activities.*/

let idealDay = `My ideal day would involve:
few hours of coding,
Reading and writing,
scrolling and formating new ideas`;

console.log(idealDay);

/*Question 51
Refactoring to Arrow Functions: Take a simple function that calculates the area of a 
rectangle and refactor it into an arrow function.*/

//Original function for calculating the area of a rectangle

function calculateArea(width: number, height: number) {
    return width * height;
    
}
// Arrow function for calculating the area
let arrowFunc = (width:number,height:number)=>{
    return width * height;
    
}
console.log(arrowFunc(5,7));


