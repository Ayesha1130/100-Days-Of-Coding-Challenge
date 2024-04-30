// Q 19

/*Dinner Guests: Working with one of the programs from Exercises 14
through 18, print a message indicating the number of people you
are inviting to dinner.*/

//Printing names in array
let guests : string[] = ["Ali Raza","Zaviyar","Muhammad Hussain","Hoorain","Aflah"];
 
//Using ForEach 
guests.forEach (guest =>{

//Printing guest lenght
console.log(` I am inviting ${guests.length} guests`);
});

// Q 20

/*Think of something you could store in a array. For example,
you could make a list of mountains, rivers, countries, cities,
languages, or anything else you’d like. Write a program that
creates a list containing these items.*/

//Printing Countries in array
let countries : string[] = ["United states","canada","United kingdom","Australia"];
 
//Printing Message
console.log("List Of Countries to visit:");

//Using ForEach
countries.forEach (country => {
    console.log(country)
});

// Q 21

/*They think of something you could store in a TypeScript Object.
 
Write a program that creates Objects containing these items.*/
 
//Printing Interface
 interface itCourse{
    courseName: 'string';
    courseLocation: 'string';
    onsiteStudent: number
};
//Printing Objects
let itCourse = {
    courseName: "JavaScript and TypeScript",
    courseLocation: "Govorner House Sindh",
    onsiteStudent: 50000,
};

console.log(itCourse);


 

 