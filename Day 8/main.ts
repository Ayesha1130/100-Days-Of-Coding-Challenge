/*Q 22
Intentional Error: Try to produce an array index error in one 
of your programs. Correct the error before finishing.*/



//array index error

//let myNum  = ["1","2","3"];
//console.log(myNum[]);

//Correct the error before finishing.

let myNumber = [1,2,3]
if(myNumber.length < 3){
    console.log(myNumber [3]);
}else{
    console.log("index out");
    
};

/*Q 23
Question 23: Conditional Tests: Write a series of conditional 
tests. Predict the results of each test.

Explain & TIP: Conditional tests check if something is true 
or false. Writing different tests helps you understand how 
conditions work in programming*/

//Test 1
let car = "Rivo";
if(car == "Rivo"){
    console.log(true);
    
}else if(car != "Rivo"){
    console.log(false);
    
}else{
    console.log("Both Conditions Are Wrong");
    
};

// Test 2

let temprature = 19;
let winters = 8;

if(temprature <= 19){
    console.log("temprature is cold",false)
}else if(winters -= 8){
    console.log("winters is very cold" );
    
}else{
    console.log(true);
    
};

//Test 3

let car1 = "Parado";

console.log("Is car == 'Parado' ? I Pridict true ");
console.log(car1 == 'Parado');

console.log("Is car == 'BMW' ? I Pridict false");
console.log(car1 == 'BMW');

// Q 24

// Test Quaility string

console.log("Test Quality With Strings");
let car2 : string = "GLI"
console.log(" is Car == GLI ",true);
console.log("car == Car",false);

// Using the lower case function
console.log("Testing with Upper case:");

let fruit : string = "Orange"
console.log("Orange".toUpperCase()== "Orange");

// Numerical tests
console.log("Numerical tests:");

let num1 : number = 10;
let num2 : number = 15;
let num3 : number = 0;

console.log("num1 is true:", Boolean(num1));
console.log("num2 is true:", Boolean(num2));
console.log("num3 is true:", Boolean(num3));

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");


let myNum = 10;
let yourNum = 20;

if(myNum == 10 && yourNum == 20){
    console.log("Both Conditions Are True");
    
}else{
    console.log("Both Conditions Are False");
    
};

if(myNum > 10 || yourNum < 8){
    console.log(" Condition is True");
    
}else{
    console.log("Atleast one Condition is False");
    
};

// Test whether an item is in a array
let fruit1 : string[] = ["Kivi","Blue berry","Berry"];
//True
console.log("Is `Kivi` In Fruits");

console.log(fruit1.includes("Kivi"));

//False
//Test whether an item is not in a array
console.log("Is `black berry` Not In Fruits");

console.log(fruit1.includes("black berry"));













    











