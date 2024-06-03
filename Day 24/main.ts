/* Day 24
Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.*/

//  This function prints numbers from 1 to 5 using a loop
function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    //Uses `let` for loop variable `i`
    console.log(i);
  }
  // `i` is not accessible here, outside the loop, because it's defined with `let`
}
printNumbers();

/* Question 71:
Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.*/

// let allows reassignment
let name: string = "Ayesha Iqbal";

// Works fine because `let` allows reassignment
name = "Shawana";

// print reasigning name
console.log(name);

// const does not allow reassignment
const name1: string = "Hoorain";

//name1 = "Shawana";        This line will cause an error
console.log(name1);

/* Question 72: 
Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.*/


//Demonstrating block scope
{
    let myName: string = "Aflah";
    const sisName: string = "Javiriya";

    //Work Fine Here
    console.log(myName);

    // Also Work Fine here
    console.log(sisName);
    
    
}

//catch (error)  
//console.log(myName);
//"`blockLet`and Block Const is not accessible outside the block.;
//console.log(sisName);


