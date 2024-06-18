/* Day 44
Question 130: 
Explain how to export a function from one JavaScript file and import it into another file.

Explain & TIP: In modern JavaScript development, modules 
allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.*/

// Exporting Named
export function name(){
    console.log("Hello World");
}

/*Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.*/

export class Person{
    name:string;
    age:number;
    
    constructor (name:string,age:number){
        this.name =name
        this.age = age

    }
    greet(){
        console.log(`My Name Is ${this.name} and I am ${this.age} years old`)
    }
}


/* Question 132: 
Discuss the difference between default and named exports in JavaScript modules.

Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.*/

// Exporting Default 
export default function createAccount(userName:string,passWord:number){
    return userName + " " + passWord

}
